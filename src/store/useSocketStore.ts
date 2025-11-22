import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';

interface Player {
    id: string;
    name: string;
    score: number;
    vote: 'cammer' | 'other' | 'both' | null;
    isHost: boolean;
}

interface RoomState {
    id: string;
    players: Player[];
    gameState: 'lobby' | 'playing' | 'results';
    currentScenarioIndex: number;
    shuffledIndices: number[];
}

interface SocketState {
    socket: Socket | null;
    isConnected: boolean;
    
    // Game State
    room: RoomState | null;
    playerId: string | null;
    
    connect: () => void;
    createRoom: (name: string, totalScenarios: number) => void;
    joinRoom: (roomId: string, name: string) => void;
    startGame: () => void;
    submitVote: (vote: 'cammer' | 'other' | 'both') => void;
    nextScenario: () => void;
    leaveRoom: () => void;
}

export const useSocketStore = create<SocketState>((set, get) => ({
    socket: null,
    isConnected: false,
    room: null,
    playerId: null,

    connect: () => {
        if (get().socket) return; // Already connected

        // Use relative URL for production, fallback to localhost:3000 for dev if needed
        // In production, the socket server runs on the same port as the app
        const url = process.env.NODE_ENV === 'production' ? window.location.origin : 'http://localhost:3000';
        const socket = io(url);

        socket.on('connect', () => {
            set({ isConnected: true, playerId: socket.id });
        });

        socket.on('disconnect', () => {
            set({ isConnected: false });
        });

        socket.on('game_state_update', (room: RoomState) => {
            set({ room });
        });

        socket.on('room_created', (roomId: string) => {
            // Handled by game_state_update mainly, but useful for debugging
        });

        socket.on('error', (msg: string) => {
            alert(msg);
        });

        set({ socket });
    },

    createRoom: (name: string, totalScenarios: number) => {
        const { socket } = get();
        if (socket) {
            socket.emit('create_room', { name, totalScenarios });
        }
    },

    joinRoom: (roomId: string, name: string) => {
        const { socket } = get();
        if (socket) {
            socket.emit('join_room', { roomId, name });
        }
    },

    startGame: () => {
        const { socket, room } = get();
        if (socket && room) {
            socket.emit('start_game', room.id);
        }
    },

    submitVote: (vote) => {
        const { socket, room } = get();
        if (socket && room) {
            socket.emit('submit_vote', { roomId: room.id, vote });
        }
    },

    nextScenario: () => {
        const { socket, room } = get();
        if (socket && room) {
            socket.emit('next_scenario', room.id);
        }
    },

    leaveRoom: () => {
        const { socket } = get();
        if (socket) {
            socket.disconnect();
            set({ socket: null, room: null, isConnected: false });
            get().connect(); // Reconnect fresh
        }
    }
}));
