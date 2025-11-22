import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const app = express();
    app.use(cors());

    const server = http.createServer(app);
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    // ... (Rest of your socket logic remains the same until the listener)


// Game Types
interface Player {
    id: string;
    name: string;
    score: number;
    vote: 'cammer' | 'other' | 'both' | null;
    isHost: boolean;
}

interface Room {
    id: string;
    players: Player[];
    gameState: 'lobby' | 'playing' | 'results';
    currentScenarioIndex: number;
    shuffledIndices: number[]; // Sync random order
    totalScenarios: number;
}

const rooms = new Map<string, Room>();

const generateRoomId = () => Math.random().toString(36).substring(2, 8).toUpperCase();

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('create_room', ({ name, totalScenarios }: { name: string, totalScenarios: number }) => {
        const roomId = generateRoomId();
        
        // Generate shuffled order for this session
        const shuffledIndices = Array.from({ length: totalScenarios }, (_, i) => i);
        for (let i = shuffledIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
        }

        const player: Player = { 
            id: socket.id, 
            name, 
            score: 0, 
            vote: null,
            isHost: true 
        };

        rooms.set(roomId, {
            id: roomId,
            players: [player],
            gameState: 'lobby',
            currentScenarioIndex: 0,
            shuffledIndices,
            totalScenarios
        });

        socket.join(roomId);
        socket.emit('room_created', roomId);
        io.to(roomId).emit('game_state_update', rooms.get(roomId));
    });

    socket.on('join_room', ({ roomId, name }: { roomId: string, name: string }) => {
        const room = rooms.get(roomId);
        if (!room) {
            socket.emit('error', 'Room not found');
            return;
        }

        const player: Player = { 
            id: socket.id, 
            name, 
            score: 0, 
            vote: null,
            isHost: false 
        };

        room.players.push(player);
        socket.join(roomId);
        
        // Send initial state to joiner and update others
        io.to(roomId).emit('game_state_update', room);
    });

    socket.on('start_game', (roomId: string) => {
        const room = rooms.get(roomId);
        if (!room) return;
        
        // Only host can start? (Check disabled for simplicity/testing)
        room.gameState = 'playing';
        io.to(roomId).emit('game_state_update', room);
    });

    socket.on('submit_vote', ({ roomId, vote }: { roomId: string, vote: 'cammer' | 'other' | 'both' }) => {
        const room = rooms.get(roomId);
        if (!room) return;

        const player = room.players.find(p => p.id === socket.id);
        if (player) {
            player.vote = vote;
        }

        // Check if all players have voted
        const allVoted = room.players.every(p => p.vote !== null);
        
        if (allVoted) {
            room.gameState = 'results';
            // Simple scoring: +100 points for voting (placeholder logic)
            // In a real version, we'd compare to the "correct" answer here
            // But since we don't have the scenario data, we'll let the client handle scoring visualization?
            // Or we just move to results state and clients show what happened.
        }

        io.to(roomId).emit('game_state_update', room);
    });

    socket.on('next_scenario', (roomId: string) => {
        const room = rooms.get(roomId);
        if (!room) return;

        // Reset votes
        room.players.forEach(p => p.vote = null);
        
        // Advance index
        room.currentScenarioIndex = (room.currentScenarioIndex + 1) % room.totalScenarios;
        room.gameState = 'playing';

        io.to(roomId).emit('game_state_update', room);
    });

    socket.on('disconnect', () => {
        rooms.forEach((room, roomId) => {
            const index = room.players.findIndex(p => p.id === socket.id);
            if (index !== -1) {
                const wasHost = room.players[index].isHost;
                room.players.splice(index, 1);
                
                if (room.players.length === 0) {
                    rooms.delete(roomId);
                } else {
                    if (wasHost) {
                        room.players[0].isHost = true; // Assign new host
                    }
                    io.to(roomId).emit('game_state_update', room);
                }
            }
        });
    });
});

// Handle Next.js requests
app.use((req, res) => {
    return handle(req, res);
});

const PORT = process.env.PORT || 3000; // Default to 3000 for combined server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
});


// Vote tracking API
import fs from 'fs';
import path from 'path';

const votesFilePath = path.join(__dirname, 'votes.json');

// Initialize votes file if it doesn't exist
if (!fs.existsSync(votesFilePath)) {
    fs.writeFileSync(votesFilePath, JSON.stringify({}));
}

app.post('/api/vote', express.json(), (req, res) => {
    try {
        const { scenarioId, vote } = req.body;
        
        if (!scenarioId || !vote || !['cammer', 'other', 'both'].includes(vote)) {
            return res.status(400).json({ error: 'Invalid vote data' });
        }

        // Read current votes
        const votesData = JSON.parse(fs.readFileSync(votesFilePath, 'utf8'));
        
        // Initialize scenario votes if not exists
        if (!votesData[scenarioId]) {
            votesData[scenarioId] = { cammer: 0, other: 0, both: 0 };
        }
        
        // Increment vote
        votesData[scenarioId][vote]++;
        
        // Calculate percentages
        const total = votesData[scenarioId].cammer + votesData[scenarioId].other + votesData[scenarioId].both;
        const percentages = {
            cammer: total > 0 ? Math.round((votesData[scenarioId].cammer / total) * 100) : 0,
            other: total > 0 ? Math.round((votesData[scenarioId].other / total) * 100) : 0,
            both: total > 0 ? Math.round((votesData[scenarioId].both / total) * 100) : 0
        };
        
        // Save votes
        fs.writeFileSync(votesFilePath, JSON.stringify(votesData, null, 2));
        
        res.json({ success: true, percentages });
    } catch (error) {
        console.error('Vote error:', error);
        res.status(500).json({ error: 'Failed to save vote' });
    }
});

app.get('/api/votes/:scenarioId', (req, res) => {
    try {
        const { scenarioId } = req.params;
        const votesData = JSON.parse(fs.readFileSync(votesFilePath, 'utf8'));
        
        if (!votesData[scenarioId]) {
            return res.json({ cammer: 0, other: 0, both: 0 });
        }
        
        const total = votesData[scenarioId].cammer + votesData[scenarioId].other + votesData[scenarioId].both;
        const percentages = {
            cammer: total > 0 ? Math.round((votesData[scenarioId].cammer / total) * 100) : 0,
            other: total > 0 ? Math.round((votesData[scenarioId].other / total) * 100) : 0,
            both: total > 0 ? Math.round((votesData[scenarioId].both / total) * 100) : 0
        };
        
        res.json(percentages);
    } catch (error) {
        console.error('Get votes error:', error);
        res.status(500).json({ error: 'Failed to get votes' });
    }
});
