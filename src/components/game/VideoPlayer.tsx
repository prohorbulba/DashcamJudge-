'use client';

import { useGameStore } from '@/store/useGameStore';
import { useRef, useEffect } from 'react';

export default function VideoPlayer({ className = "" }: { className?: string }) {
    const scenario = useGameStore((state) => state.getCurrentScenario());
    const videoRef = useRef<HTMLVideoElement>(null);

    const isYouTube = scenario.videoUrl.includes('youtube.com') || scenario.videoUrl.includes('youtu.be');

    const getYouTubeId = (url: string) => {
        const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        return match ? match[1] : null;
    };

    useEffect(() => {
        if (videoRef.current) {
            // Try to play immediately
            const playVideo = () => {
                if (videoRef.current) {
                    videoRef.current.muted = true; // Mute first for autoplay
                    const playPromise = videoRef.current.play();
                    if (playPromise !== undefined) {
                        playPromise
                            .then(() => {
                                console.log('Autoplay started');
                            })
                            .catch(() => {
                                // If autoplay fails, try clicking programmatically
                                setTimeout(() => {
                                    if (videoRef.current && videoRef.current.paused) {
                                        videoRef.current.click();
                                        videoRef.current.play().catch(() => {});
                                    }
                                }, 100);
                            });
                    }
                }
            };

            // Try multiple times to ensure playback
            playVideo();
            setTimeout(playVideo, 100);
            setTimeout(playVideo, 300);
        }
    }, [scenario.id]);

    return (
        <div className={`bg-black rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group ${className}`}>
            {isYouTube ? (
                <iframe
                    key={scenario.id}
                    src={`https://www.youtube.com/embed/${getYouTubeId(scenario.videoUrl)}?autoplay=1&mute=1&loop=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <video
                    ref={videoRef}
                    key={scenario.id}
                    src={scenario.videoUrl}
                    className="w-full h-full object-contain"
                    controls
                    muted
                    autoPlay
                    playsInline
                    loop
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen"
                />
            )}
        </div>
    );
}
