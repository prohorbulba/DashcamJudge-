'use client';

import { useGameStore } from '@/store/useGameStore';
import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

export default function VideoPlayer({ className = "" }: { className?: string }) {
    const scenario = useGameStore((state) => state.getCurrentScenario());
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Check if it's a YouTube link
    const isYouTube = scenario.videoUrl.includes('youtube.com') || scenario.videoUrl.includes('youtu.be');

    // Extract YouTube video ID
    const getYouTubeId = (url: string) => {
        const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        return match ? match[1] : null;
    };

    useEffect(() => {
        setIsPlaying(false);
    }, [scenario.id]);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className={`bg-black rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group ${className}`}>
            {isYouTube ? (
                <iframe
                    key={scenario.id}
                    src={`https://www.youtube.com/embed/${getYouTubeId(scenario.videoUrl)}?autoplay=1&mute=0&loop=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <>
                    <video
                        ref={videoRef}
                        key={scenario.id}
                        src={scenario.videoUrl}
                        className="w-full h-full object-contain"
                        playsInline
                        loop
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }}
                    />
                    {!isPlaying && (
                        <div 
                            className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm cursor-pointer z-10"
                            onClick={handlePlayClick}
                        >
                            <div className="bg-white/90 rounded-full p-6 sm:p-8 hover:bg-white transition-all hover:scale-110">
                                <Play className="w-12 h-12 sm:w-16 sm:h-16 text-black fill-black" />
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
