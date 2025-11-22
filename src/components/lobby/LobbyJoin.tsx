'use client';

import { useState } from 'react';
import { useSocketStore } from '@/store/useSocketStore';
import { useRouter } from 'next/navigation';

export default function LobbyJoin() {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const joinRoom = useSocketStore((state) => state.joinRoom);
    const room = useSocketStore((state) => state.room);
    const router = useRouter();

    const handleJoin = () => {
        if (!name.trim() || !code.trim()) return;
        joinRoom(code.toUpperCase(), name);
    };

    // Redirect to lobby when joined
    if (room?.id) {
        router.push(`/lobby/${room.id}`);
    }

    return (
        <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-4">Join Lobby</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-green-500"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Room Code</label>
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-green-500 uppercase"
                        placeholder="ABC123"
                    />
                </div>
                <button
                    onClick={handleJoin}
                    disabled={!name.trim() || !code.trim()}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors"
                >
                    Join Room
                </button>
            </div>
        </div>
    );
}
