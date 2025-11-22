'use client';

import { useState } from 'react';
import { useSocketStore } from '@/store/useSocketStore';
import { useRouter } from 'next/navigation';

export default function LobbyCreate() {
    const [name, setName] = useState('');
    const createRoom = useSocketStore((state) => state.createRoom);
    const roomId = useSocketStore((state) => state.roomId);
    const router = useRouter();

    const handleCreate = () => {
        if (!name.trim()) return;
        createRoom(name);
    };

    // Redirect to lobby when room is created
    if (roomId) {
        router.push(`/lobby/${roomId}`);
    }

    return (
        <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-4">Create Lobby</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Enter your name"
                    />
                </div>
                <button
                    onClick={handleCreate}
                    disabled={!name.trim()}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors"
                >
                    Create Room
                </button>
            </div>
        </div>
    );
}
