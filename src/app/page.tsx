'use client';

import { useEffect } from 'react';
import { useGameStore } from '@/store/useGameStore';
import VideoPlayer from '@/components/game/VideoPlayer';
import VotingPanel from '@/components/game/VotingPanel';
import ResultOverlay from '@/components/game/ResultOverlay';
import { Gavel } from 'lucide-react';

export default function Home() {
    const shuffleScenarios = useGameStore((state) => state.shuffleScenarios);

    useEffect(() => {
        shuffleScenarios();
    }, []);

    return (
        <main className="h-screen w-screen bg-black text-white font-mono overflow-hidden flex flex-col">
            <div className="flex-1 flex flex-col w-full h-full max-w-5xl mx-auto p-2 sm:p-4 md:p-6 min-h-0">
                {/* Header - Fixed Height */}
                <header className="flex-none flex items-center justify-between pb-2 sm:pb-4 mb-2 sm:mb-4 border-b border-white/20">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight uppercase">Dashcam Judge</h1>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 uppercase">
                        v1.0
                    </div>
                </header>

                {/* Content Area - Fills remaining space */}
                <div className="flex-1 flex flex-col min-h-0 gap-2 sm:gap-4">
                    {/* Video Container - Takes all available space */}
                    <div className="flex-1 min-h-0 relative bg-zinc-900/50 rounded-lg sm:rounded-2xl border border-white/10 overflow-hidden">
                        <VideoPlayer className="absolute inset-0 w-full h-full" />
                    </div>

                    {/* Controls Container - Fixed/Auto height */}
                    <div className="flex-none relative z-10">
                        <VotingPanel />
                        <ResultOverlay />
                    </div>
                </div>
            </div>
        </main>
    );
}
