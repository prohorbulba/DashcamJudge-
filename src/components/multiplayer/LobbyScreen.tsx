'use client';

import { useState, useEffect } from 'react';
import { useSocketStore } from '@/store/useSocketStore';
import { SCENARIOS } from '@/lib/scenarios';
import { Users, Play, Copy, ArrowLeft, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LobbyScreen({ onBack }: { onBack: () => void }) {
    const { connect, createRoom, joinRoom, room, playerId, startGame, leaveRoom, isConnected } = useSocketStore();
    const [mode, setMode] = useState<'menu' | 'create' | 'join'>('menu');
    const [name, setName] = useState('');
    const [joinCode, setJoinCode] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        connect();
        return () => leaveRoom();
    }, []);

    const handleCreate = () => {
        if (!name.trim()) return;
        createRoom(name, SCENARIOS.length);
    };

    const handleJoin = () => {
        if (!name.trim() || !joinCode.trim()) return;
        joinRoom(joinCode.toUpperCase(), name);
    };

    const copyCode = () => {
        if (room?.id) {
            navigator.clipboard.writeText(room.id);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    // Waiting Room View
    if (room) {
        const isHost = room.players.find(p => p.id === playerId)?.isHost;

        return (
            <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Lobby</h2>
                            <div className="flex items-center gap-3">
                                <span className="text-slate-400">Room Code:</span>
                                <button 
                                    onClick={copyCode}
                                    className="flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors group"
                                >
                                    <span className="text-2xl font-mono font-bold text-blue-400 tracking-wider">{room.id}</span>
                                    <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />
                                </button>
                                {copied && <span className="text-green-400 text-sm">Copied!</span>}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                            <Users className="w-5 h-5 text-blue-400" />
                            <span className="font-bold text-blue-100">{room.players.length} Players</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {room.players.map((player) => (
                            <div 
                                key={player.id}
                                className={`p-4 rounded-xl border transition-all ${
                                    player.id === playerId 
                                        ? 'bg-blue-500/10 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                                        : 'bg-white/5 border-white/10'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                                            player.id === playerId ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'
                                        }`}>
                                            {player.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white flex items-center gap-2">
                                                {player.name}
                                                {player.id === playerId && <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full">You</span>}
                                            </div>
                                            {player.isHost && <div className="text-xs text-yellow-500 font-medium">Host</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center pt-6 border-t border-white/10">
                        <button
                            onClick={leaveRoom}
                            className="px-6 py-3 text-slate-400 hover:text-white transition-colors font-medium"
                        >
                            Leave Room
                        </button>

                        {isHost ? (
                            <button
                                onClick={startGame}
                                className="flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all"
                            >
                                <Play className="w-5 h-5 fill-current" />
                                Start Game
                            </button>
                        ) : (
                            <div className="flex items-center gap-3 text-slate-400 animate-pulse">
                                <RefreshCw className="w-5 h-5 animate-spin" />
                                Waiting for host to start...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Create/Join Menu
    return (
        <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
            <button 
                onClick={onBack}
                className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
                <ArrowLeft className="w-4 h-4" /> Back to Menu
            </button>

            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Multiplayer</h2>

                {!isConnected && (
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
                            <span className="text-blue-200 font-medium">Connecting to server...</span>
                        </div>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {mode === 'menu' && (
                        <motion.div 
                            key="menu"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-4"
                        >
                            <button
                                onClick={() => setMode('create')}
                                className="w-full p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 hover:border-blue-500/50 rounded-xl text-left group transition-all hover:scale-[1.02]"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xl font-bold text-blue-100">Create Lobby</span>
                                    <Play className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                                </div>
                                <p className="text-blue-200/60 text-sm">Host a game and invite friends</p>
                            </button>

                            <button
                                onClick={() => setMode('join')}
                                className="w-full p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 hover:border-purple-500/50 rounded-xl text-left group transition-all hover:scale-[1.02]"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xl font-bold text-purple-100">Join Lobby</span>
                                    <Users className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                                </div>
                                <p className="text-purple-200/60 text-sm">Enter a code to join an existing game</p>
                            </button>
                        </motion.div>
                    )}

                    {mode === 'create' && (
                        <motion.div
                            key="create"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Enter Your Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    placeholder="e.g. DriftKing99"
                                    autoFocus
                                />
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setMode('menu')}
                                    className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreate}
                                    disabled={!name.trim()}
                                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all"
                                >
                                    Create
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {mode === 'join' && (
                        <motion.div
                            key="join"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Enter Your Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all mb-4"
                                    placeholder="e.g. DriftKing99"
                                    autoFocus
                                />
                                <label className="block text-sm font-medium text-slate-300 mb-2">Room Code</label>
                                <input
                                    type="text"
                                    value={joinCode}
                                    onChange={(e) => setJoinCode(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all uppercase tracking-wider font-mono"
                                    placeholder="ABC123"
                                />
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setMode('menu')}
                                    className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleJoin}
                                    disabled={!name.trim() || !joinCode.trim()}
                                    className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all"
                                >
                                    Join
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

