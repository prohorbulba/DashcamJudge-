'use client';

import { useGameStore } from '@/store/useGameStore';
import { SCENARIOS } from '@/lib/scenarios';
import { Video, AlertTriangle, ThumbsDown } from 'lucide-react';

export default function VotingPanel() {
    const { vote, hasVoted, getCurrentScenario } = useGameStore();
    
    if (hasVoted) return null;

    const scenario = getCurrentScenario();
    const vehicles = scenario?.vehicles;

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <button
                    onClick={() => vote('cammer')}
                className="group relative p-4 sm:p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all hover:scale-105 h-32 sm:h-44"
            >
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <Video className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-300" />
                    <span className="font-bold text-blue-100 text-base sm:text-lg">
                        {vehicles?.cammer.type === 'Witness' ? 'Cammer (Witness)' : 'Cammer'}
                    </span>
                    <span className="text-xs text-blue-300/70">
                        {vehicles?.cammer.type === 'Witness' ? '(Not Involved)' : '(Person filming)'}
                    </span>
                </div>
            </button>

            <button
                onClick={() => vote('other')}
                className="group relative p-4 sm:p-6 bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl hover:bg-red-500/20 hover:border-red-500/50 transition-all hover:scale-105 h-32 sm:h-44"
            >
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 group-hover:text-red-300" />
                    <span className="font-bold text-red-100 text-base sm:text-lg">
                        {vehicles ? (
                            vehicles.other.color === 'Unknown' 
                                ? 'Other Vehicle' 
                                : `${vehicles.other.color} ${vehicles.other.type}`
                        ) : 'Other Party at Fault'}
                    </span>
                    <span className="text-xs text-red-300/70">
                        {vehicles ? '(Other)' : '(Other driver/person)'}
                    </span>
                </div>
            </button>

            <button
                onClick={() => vote('both')}
                className="group relative p-4 sm:p-6 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all hover:scale-105 h-32 sm:h-44"
            >
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <ThumbsDown className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 group-hover:text-yellow-300" />
                    <span className="font-bold text-yellow-100 text-base sm:text-lg">Both at Fault</span>
                </div>
            </button>
            </div>
            
            {/* Placeholder for Next Scenario button to prevent layout shift */}
            <div className="flex justify-center invisible select-none">
                <button className="flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-transparent text-transparent border border-transparent rounded-full font-bold">
                    Next Scenario
                    <div className="w-5 h-5" /> 
                </button>
            </div>
        </div>
    );
}
