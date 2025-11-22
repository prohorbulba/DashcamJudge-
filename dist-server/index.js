"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = require("socket.io");
var cors_1 = __importDefault(require("cors"));
var next_1 = __importDefault(require("next"));
var dev = process.env.NODE_ENV !== 'production';
var nextApp = (0, next_1.default)({ dev: dev });
var handle = nextApp.getRequestHandler();
nextApp.prepare().then(function () {
    var app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    var server = http_1.default.createServer(app);
    var io = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });
    var rooms = new Map();
    var generateRoomId = function () { return Math.random().toString(36).substring(2, 8).toUpperCase(); };
    io.on('connection', function (socket) {
        console.log('User connected:', socket.id);
        socket.on('create_room', function (_a) {
            var _b;
            var name = _a.name, totalScenarios = _a.totalScenarios;
            var roomId = generateRoomId();
            // Generate shuffled order for this session
            var shuffledIndices = Array.from({ length: totalScenarios }, function (_, i) { return i; });
            for (var i = shuffledIndices.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                _b = [shuffledIndices[j], shuffledIndices[i]], shuffledIndices[i] = _b[0], shuffledIndices[j] = _b[1];
            }
            var player = {
                id: socket.id,
                name: name,
                score: 0,
                vote: null,
                isHost: true
            };
            rooms.set(roomId, {
                id: roomId,
                players: [player],
                gameState: 'lobby',
                currentScenarioIndex: 0,
                shuffledIndices: shuffledIndices,
                totalScenarios: totalScenarios
            });
            socket.join(roomId);
            socket.emit('room_created', roomId);
            io.to(roomId).emit('game_state_update', rooms.get(roomId));
        });
        socket.on('join_room', function (_a) {
            var roomId = _a.roomId, name = _a.name;
            var room = rooms.get(roomId);
            if (!room) {
                socket.emit('error', 'Room not found');
                return;
            }
            var player = {
                id: socket.id,
                name: name,
                score: 0,
                vote: null,
                isHost: false
            };
            room.players.push(player);
            socket.join(roomId);
            // Send initial state to joiner and update others
            io.to(roomId).emit('game_state_update', room);
        });
        socket.on('start_game', function (roomId) {
            var room = rooms.get(roomId);
            if (!room)
                return;
            // Only host can start? (Check disabled for simplicity/testing)
            room.gameState = 'playing';
            io.to(roomId).emit('game_state_update', room);
        });
        socket.on('submit_vote', function (_a) {
            var roomId = _a.roomId, vote = _a.vote;
            var room = rooms.get(roomId);
            if (!room)
                return;
            var player = room.players.find(function (p) { return p.id === socket.id; });
            if (player) {
                player.vote = vote;
            }
            // Check if all players have voted
            var allVoted = room.players.every(function (p) { return p.vote !== null; });
            if (allVoted) {
                room.gameState = 'results';
                // Simple scoring: +100 points for voting (placeholder logic)
                // In a real version, we'd compare to the "correct" answer here
                // But since we don't have the scenario data, we'll let the client handle scoring visualization?
                // Or we just move to results state and clients show what happened.
            }
            io.to(roomId).emit('game_state_update', room);
        });
        socket.on('next_scenario', function (roomId) {
            var room = rooms.get(roomId);
            if (!room)
                return;
            // Reset votes
            room.players.forEach(function (p) { return p.vote = null; });
            // Advance index
            room.currentScenarioIndex = (room.currentScenarioIndex + 1) % room.totalScenarios;
            room.gameState = 'playing';
            io.to(roomId).emit('game_state_update', room);
        });
        socket.on('disconnect', function () {
            rooms.forEach(function (room, roomId) {
                var index = room.players.findIndex(function (p) { return p.id === socket.id; });
                if (index !== -1) {
                    var wasHost = room.players[index].isHost;
                    room.players.splice(index, 1);
                    if (room.players.length === 0) {
                        rooms.delete(roomId);
                    }
                    else {
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
    app.all('*', function (req, res) {
        return handle(req, res);
    });
    var PORT = process.env.PORT || 3000; // Default to 3000 for combined server
    server.listen(PORT, function () {
        console.log("Server running on port ".concat(PORT));
    });
});
