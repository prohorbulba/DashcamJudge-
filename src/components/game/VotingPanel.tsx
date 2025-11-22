'use client';

import { useGameStore } from '@/store/useGameStore';
import { SCENARIOS } from '@/lib/scenarios';
import { Video, AlertTriangle, ThumbsDown, ArrowRight } from 'lucide-react';

export default function VotingPanel() {
    const { vote, hasVoted, getCurrentScenario } = useGameStore();
    
    if (hasVoted) return null;

    const scenario = getCurrentScenario();
    const vehicles = scenario?.vehicles;

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-4 mb-2 sm:mb-6">
                <button
                    onClick={() => vote('cammer')}
                className="group relative p-2 sm:p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg sm:rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 ease-out sm:hover:scale-105 h-20 sm:h-44 active:scale-95"
            >
                <div className="flex flex-col items-center gap-1 sm:gap-3">
                    <Video className="w-5 h-5 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    <span className="font-bold text-blue-100 text-sm sm:text-lg transition-colors duration-300">
                        {vehicles?.cammer.type === 'Witness' ? 'Cammer (Witness)' : 'Cammer'}
                    </span>
                    <span className="text-[10px] sm:text-xs text-blue-300/70 transition-colors duration-300">
                        {vehicles?.cammer.type === 'Witness' ? '(Not Involved)' : '(Person filming)'}
                    </span>
                </div>
            </button>

            <button
                onClick={() => vote('other')}
                className="group relative p-2 sm:p-6 bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-lg sm:rounded-xl hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 ease-out sm:hover:scale-105 h-20 sm:h-44 active:scale-95"
            >
                <div className="flex flex-col items-center gap-1 sm:gap-3">
                    <AlertTriangle className="w-5 h-5 sm:w-8 sm:h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                    <span className="font-bold text-red-100 text-sm sm:text-lg transition-colors duration-300">
                        {vehicles ? (
                            vehicles.other.color === 'Unknown' 
                                ? 'Other Vehicle' 
                                : `${vehicles.other.color} ${vehicles.other.type}`
                        ) : 'Other Party at Fault'}
                    </span>
                    <span className="text-[10px] sm:text-xs text-red-300/70 transition-colors duration-300">
                        {vehicles ? '(Other)' : '(Other driver/person)'}
                    </span>
                </div>
            </button>

            <button
                onClick={() => vote('both')}
                className="group relative p-2 sm:p-6 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-lg sm:rounded-xl hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 ease-out sm:hover:scale-105 h-20 sm:h-44 active:scale-95"
            >
                <div className="flex flex-col items-center gap-1 sm:gap-3">
                    <ThumbsDown className="w-5 h-5 sm:w-8 sm:h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                    <span className="font-bold text-yellow-100 text-sm sm:text-lg transition-colors duration-300">Biker's Fault</span>
                </div>
            </button>
            </div>
            
            {/* Grey "Next Scenario" button before vote */}
            <div className="flex justify-center h-10 sm:h-12">
                <button 
                    disabled
                    className="flex items-center gap-2 px-4 sm:px-8 py-1.5 sm:py-3 bg-gray-600 text-gray-400 rounded-full font-bold text-xs sm:text-base cursor-not-allowed opacity-50"
                >
                    Next Scenario
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    );
}
