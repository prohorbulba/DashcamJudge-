'use client';

import { useGameStore } from '@/store/useGameStore';

export default function VideoPlayer({ className = "" }: { className?: string }) {
    const scenario = useGameStore((state) => state.getCurrentScenario());

    // Check if it's a YouTube link
    const isYouTube = scenario.videoUrl.includes('youtube.com') || scenario.videoUrl.includes('youtu.be');

    // Extract YouTube video ID
    const getYouTubeId = (url: string) => {
        const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        return match ? match[1] : null;
    };

    return (
        <div className={`bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group ${className}`}>
            {isYouTube ? (
                <iframe
                    key={scenario.id}
                    src={`https://www.youtube.com/embed/${getYouTubeId(scenario.videoUrl)}?autoplay=1&mute=0&loop=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <video
                    key={scenario.id}
                    src={scenario.videoUrl}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    loop
                />
            )}
        </div>
    );
}
