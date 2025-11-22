'use client';

import { useGameStore } from '@/store/useGameStore';
import { ArrowRight, Video, AlertTriangle, ThumbsDown } from 'lucide-react';

export default function ResultOverlay() {
    const { hasVoted, getCurrentScenario, nextScenario, userVote } = useGameStore();
    const scenario = getCurrentScenario();

    if (!hasVoted) return null;

    // Helper to determine styling based on the result type
    const getResultStyle = (type: 'cammer' | 'other' | 'both') => {
        const isUserChoice = userVote === type;
        const percentage = scenario.votes[type];
        
        let baseColorClass = '';
        let iconColorClass = '';
        
        if (type === 'cammer') {
            baseColorClass = 'from-blue-500/20 to-blue-600/20 border-blue-500/50';
            iconColorClass = 'text-blue-400';
        } else if (type === 'other') {
            baseColorClass = 'from-red-500/20 to-red-600/20 border-red-500/50';
            iconColorClass = 'text-red-400';
        } else {
            baseColorClass = 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/50';
            iconColorClass = 'text-yellow-400';
        }

        return {
            container: `relative overflow-hidden p-6 rounded-xl border transition-all h-44 ${isUserChoice ? 'ring-2 ring-white bg-white/10' : 'bg-gradient-to-br ' + baseColorClass}`,
            icon: iconColorClass,
            percentage
        };
    };

    const renderCard = (type: 'cammer' | 'other' | 'both', label: string, Icon: any) => {
        const style = getResultStyle(type);
        return (
            <div className={style.container}>
                {/* Progress Bar Background */}
                <div 
                    className="absolute bottom-0 left-0 h-1.5 bg-current opacity-50 transition-all duration-1000" 
                    style={{ width: `${style.percentage}%`, color: 'inherit' }} 
                />
                
                <div className="flex flex-col items-center gap-3 relative z-10">
                    <Icon className={`w-8 h-8 ${style.icon}`} />
                    <span className="font-bold text-white text-lg">{label}</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-white">{style.percentage}%</span>
                    </div>
                    {userVote === type && (
                        <span className="text-xs font-medium bg-white text-black px-2 py-0.5 rounded-full mt-1">
                            YOU
                        </span>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-4xl mx-auto animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {renderCard('cammer', 'Cammer', Video)}
                {renderCard('other', 'Other Party', AlertTriangle)}
                {renderCard('both', 'Both', ThumbsDown)}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={nextScenario}
                    className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-white/20"
                >
                    Next Scenario
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
