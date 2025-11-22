'use client';

import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

export default function OnlineUsersTracker() {
    const [onlineUsers, setOnlineUsers] = useState<number>(203);

    useEffect(() => {
        // Simulate live user count fluctuating around 200
        const interval = setInterval(() => {
            // Random change between -5 and +5
            const change = Math.floor(Math.random() * 11) - 5;
            setOnlineUsers(prev => {
                const newCount = prev + change;
                // Keep between 180 and 230
                return Math.max(180, Math.min(230, newCount));
            });
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-zinc-900/80 border border-white/20 rounded-md sm:rounded-lg">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
            <span className="text-[10px] sm:text-sm">
                <span className="text-green-400 font-bold">{onlineUsers}</span>
                <span className="text-gray-400 ml-0.5 sm:ml-1 hidden sm:inline">online</span>
            </span>
        </div>
    );
}
