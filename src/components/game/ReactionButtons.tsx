'use client';

import { useState } from 'react';
import { useGameStore } from '@/store/useGameStore';

const REACTIONS = [
    { emoji: '😂', label: 'Funny' },
    { emoji: '😱', label: 'Shocking' },
    { emoji: '😡', label: 'Rage' },
    { emoji: '👏', label: 'Good driving' },
    { emoji: '🤦', label: 'Facepalm' },
    { emoji: '💀', label: 'Dead' }
];

export default function ReactionButtons() {
    const scenario = useGameStore((state) => state.getCurrentScenario());
    const [selectedReaction, setSelectedReaction] = useState<string | null>(null);

    const handleReaction = (emoji: string) => {
        setSelectedReaction(emoji);
        console.log('Reaction for scenario', scenario.id, ':', emoji);
        
        // Visual feedback then reset
        setTimeout(() => {
            setSelectedReaction(null);
        }, 2000);
    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-20">
            {REACTIONS.map(({ emoji, label }) => (
                <button
                    key={emoji}
                    onClick={() => handleReaction(emoji)}
                    className={`group relative w-12 h-12 sm:w-14 sm:h-14 bg-zinc-900/80 backdrop-blur-sm border border-white/20 rounded-full hover:scale-110 transition-all shadow-lg flex items-center justify-center ${
                        selectedReaction === emoji ? 'scale-125 ring-2 ring-white' : ''
                    }`}
                    title={label}
                >
                    <span className="text-2xl sm:text-3xl">{emoji}</span>
                    
                    {/* Tooltip on hover */}
                    <div className="absolute right-full mr-2 px-3 py-1 bg-zinc-900 border border-white/20 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {label}
                    </div>
                </button>
            ))}
        </div>
    );
}
