'use client';

import { useGameStore } from '@/store/useGameStore';
import { ArrowRight, Video, AlertTriangle, ThumbsDown } from 'lucide-react';

export default function ResultOverlay() {
    const { hasVoted, getCurrentScenario, nextScenario, userVote, votePercentages } = useGameStore();
    const scenario = getCurrentScenario();

    if (!hasVoted) return null;

    // Get percentages from store (fetched from backend) or default to 0
    const percentages = votePercentages[scenario.id] || { cammer: 0, other: 0, both: 0 };

    // Helper to determine styling based on the result type
    const getResultStyle = (type: 'cammer' | 'other' | 'both') => {
        const isUserChoice = userVote === type;
        const percentage = Number(percentages[type]) || 0;
        
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
            container: `relative overflow-hidden p-2 sm:p-6 rounded-lg sm:rounded-xl border transition-all h-20 sm:h-44 ${isUserChoice ? 'ring-2 ring-white bg-white/10' : 'bg-gradient-to-br ' + baseColorClass}`,
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
                
                <div className="flex flex-col items-center gap-1 sm:gap-3 relative z-10">
                    <Icon className={`w-5 h-5 sm:w-8 sm:h-8 ${style.icon}`} />
                    <span className="font-bold text-white text-sm sm:text-lg">{label}</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl sm:text-3xl font-black text-white">{style.percentage}%</span>
                    </div>
                    {userVote === type && (
                        <span className="text-[10px] sm:text-xs font-medium bg-white text-black px-1.5 py-0.5 sm:px-2 rounded-full mt-0.5 sm:mt-1">
                            YOU
                        </span>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-4xl mx-auto animate-in fade-in duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-4 mb-2 sm:mb-6">
                {renderCard('cammer', 'Cammer', Video)}
                {renderCard('other', 'Other Party', AlertTriangle)}
                {renderCard('both', 'Both', ThumbsDown)}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={nextScenario}
                    className="flex items-center gap-2 px-4 sm:px-8 py-1.5 sm:py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-white/20 text-xs sm:text-base"
                >
                    Next Scenario
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    );
}
