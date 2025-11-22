'use client';

import { useEffect, useState } from 'react';
import { useSocketStore } from '@/store/useSocketStore';
import { SCENARIOS } from '@/lib/scenarios';
import { Video, AlertTriangle, ThumbsDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Reuse the VideoPlayer but driven by props
function MultiplayerVideoPlayer({ videoUrl, title }: { videoUrl: string; title: string }) {
    const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
    
    const getYouTubeId = (url: string) => {
        const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        return match ? match[1] : null;
    };

    return (
        <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
            {isYouTube ? (
                <iframe
                    key={videoUrl}
                    src={`https://www.youtube.com/embed/${getYouTubeId(videoUrl)}?autoplay=1&mute=0&loop=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <video
                    key={videoUrl}
                    src={videoUrl}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    loop
                />
            )}
            {/* Title removed as requested */}
        </div>
    );
}

export default function MultiplayerGameScreen() {
    const { room, playerId, submitVote, nextScenario } = useSocketStore();
    
    if (!room) return null;

    // Determine current scenario from shared random order
    const currentScenarioIndex = room.shuffledIndices[room.currentScenarioIndex];
    const scenario = SCENARIOS[currentScenarioIndex];
    const vehicles = scenario?.vehicles;
    
    const me = room.players.find(p => p.id === playerId);
    const myVote = me?.vote;
    const isHost = me?.isHost;

    // Calculate stats if in results mode
    const stats = { cammer: 0, other: 0, both: 0, total: 0 };
    if (room.gameState === 'results') {
        room.players.forEach(p => {
            if (p.vote) {
                stats[p.vote]++;
                stats.total++;
            }
        });
    }

    const getBarColor = (type: 'cammer' | 'other' | 'both') => {
        if (type === myVote) return 'bg-white text-black ring-2 ring-white'; // Highlight user choice
        if (type === 'cammer') return 'bg-blue-500/50 text-blue-100';
        if (type === 'other') return 'bg-red-500/50 text-red-100';
        return 'bg-yellow-500/50 text-yellow-100';
    };

    return (
        <div className="w-full max-w-6xl mx-auto animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-6">
                
                {/* Main Game Area */}
                <div className="space-y-6">
                    <MultiplayerVideoPlayer videoUrl={scenario.videoUrl} title={scenario.title} />

                    {/* Voting Phase */}
                    {room.gameState === 'playing' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button
                                onClick={() => submitVote('cammer')}
                                disabled={!!myVote}
                                className={`group relative p-6 rounded-xl border transition-all ${
                                    myVote === 'cammer' 
                                        ? 'bg-blue-600 border-blue-400 scale-105 shadow-lg shadow-blue-500/20' 
                                        : myVote 
                                            ? 'bg-slate-800/50 border-slate-700 opacity-50'
                                            : 'bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/50 hover:scale-105'
                                }`}
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <Video className={`w-8 h-8 ${myVote === 'cammer' ? 'text-white' : 'text-blue-400'}`} />
                                    <span className={`font-bold text-lg ${myVote === 'cammer' ? 'text-white' : 'text-blue-100'}`}>
                                        Cammer
                                    </span>
                                    <span className={`text-xs ${myVote === 'cammer' ? 'text-blue-200' : 'text-blue-300/70'}`}>
                                        (Person filming)
                                    </span>
                                </div>
                            </button>

                            <button
                                onClick={() => submitVote('other')}
                                disabled={!!myVote}
                                className={`group relative p-6 rounded-xl border transition-all ${
                                    myVote === 'other' 
                                        ? 'bg-red-600 border-red-400 scale-105 shadow-lg shadow-red-500/20' 
                                        : myVote 
                                            ? 'bg-slate-800/50 border-slate-700 opacity-50'
                                            : 'bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/20 hover:bg-red-500/20 hover:border-red-500/50 hover:scale-105'
                                }`}
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <AlertTriangle className={`w-8 h-8 ${myVote === 'other' ? 'text-white' : 'text-red-400'}`} />
                                    <span className={`font-bold text-lg ${myVote === 'other' ? 'text-white' : 'text-red-100'}`}>
                                        {vehicles ? (
                                            vehicles.other.color === 'Unknown' 
                                                ? 'Other Vehicle' 
                                                : `${vehicles.other.color} ${vehicles.other.type}`
                                        ) : 'Other Party at Fault'}
                                    </span>
                                    <span className={`text-xs ${myVote === 'other' ? 'text-red-200' : 'text-red-300/70'}`}>
                                        {vehicles ? '(Other)' : '(Other driver/person)'}
                                    </span>
                                </div>
                            </button>

                            <button
                                onClick={() => submitVote('both')}
                                disabled={!!myVote}
                                className={`group relative p-6 rounded-xl border transition-all ${
                                    myVote === 'both' 
                                        ? 'bg-yellow-600 border-yellow-400 scale-105 shadow-lg shadow-yellow-500/20' 
                                        : myVote 
                                            ? 'bg-slate-800/50 border-slate-700 opacity-50'
                                            : 'bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-yellow-500/20 hover:bg-yellow-500/20 hover:border-yellow-500/50 hover:scale-105'
                                }`}
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <ThumbsDown className={`w-8 h-8 ${myVote === 'both' ? 'text-white' : 'text-yellow-400'}`} />
                                    <span className={`font-bold text-lg ${myVote === 'both' ? 'text-white' : 'text-yellow-100'}`}>
                                        Both at Fault
                                    </span>
                                </div>
                            </button>
                        </div>
                    )}

                    {/* Results Phase */}
                    {room.gameState === 'results' && (
                        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Group Verdict</h3>

                            <div className="space-y-4">
                                {/* Cammer Bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium text-slate-400">
                                        <span>Cammer at Fault</span>
                                        <span>{stats.total ? Math.round((stats.cammer / stats.total) * 100) : 0}% ({stats.cammer} votes)</span>
                                    </div>
                                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-1000 ease-out ${getBarColor('cammer')}`}
                                            style={{ width: `${stats.total ? (stats.cammer / stats.total) * 100 : 0}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Other Bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium text-slate-400">
                                        <span>Other Party at Fault</span>
                                        <span>{stats.total ? Math.round((stats.other / stats.total) * 100) : 0}% ({stats.other} votes)</span>
                                    </div>
                                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-1000 ease-out ${getBarColor('other')}`}
                                            style={{ width: `${stats.total ? (stats.other / stats.total) * 100 : 0}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Both Bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium text-slate-400">
                                        <span>Both at Fault</span>
                                        <span>{stats.total ? Math.round((stats.both / stats.total) * 100) : 0}% ({stats.both} votes)</span>
                                    </div>
                                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-1000 ease-out ${getBarColor('both')}`}
                                            style={{ width: `${stats.total ? (stats.both / stats.total) * 100 : 0}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-center">
                                {isHost ? (
                                    <button
                                        onClick={nextScenario}
                                        className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-white/20"
                                    >
                                        Next Scenario
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                ) : (
                                    <div className="text-slate-400 animate-pulse">Waiting for host...</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar / Player List */}
                <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col h-fit">
                    <h3 className="text-lg font-bold text-white mb-4 px-2">Players ({room.players.length})</h3>
                    <div className="space-y-2">
                        {room.players.map(player => (
                            <div 
                                key={player.id}
                                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                    player.id === playerId ? 'bg-white/10 border border-white/10' : 'bg-white/5'
                                }`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                    player.vote ? 'bg-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'bg-slate-700 text-slate-400'
                                }`}>
                                    {player.vote ? '✓' : player.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-white truncate">
                                        {player.name}
                                        {player.id === playerId && <span className="text-xs text-slate-400 ml-2">(You)</span>}
                                    </div>
                                    <div className="text-xs text-slate-400">
                                        {player.vote ? 'Voted' : 'Thinking...'}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

