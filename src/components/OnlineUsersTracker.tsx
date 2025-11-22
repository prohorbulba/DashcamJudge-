'use client';

import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { useSocketStore } from '@/store/useSocketStore';

export default function OnlineUsersTracker() {
    const [onlineUsers, setOnlineUsers] = useState<number>(0);
    const socket = useSocketStore((state) => state.socket);
    const connect = useSocketStore((state) => state.connect);
    const isConnected = useSocketStore((state) => state.isConnected);

    useEffect(() => {
        // Connect to Socket.IO when component mounts
        if (!socket) {
            connect();
        }
    }, [socket, connect]);

    useEffect(() => {
        if (!socket) return;

        // Listen for online users updates from server
        socket.on('online_users', (count: number) => {
            console.log('[ONLINE] Users:', count);
            setOnlineUsers(count);
        });

        return () => {
            socket.off('online_users');
        };
    }, [socket]);

    return (
        <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-zinc-900/80 border border-white/20 rounded-md sm:rounded-lg">
            <div className="relative">
                <Users className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${isConnected ? 'text-green-400' : 'text-gray-500'}`} />
                {/* Pulse dot when connected and users > 0 */}
                {isConnected && onlineUsers > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                )}
            </div>
            <span className="text-[10px] sm:text-sm">
                <span className={`font-bold tabular-nums ${isConnected ? 'text-green-400' : 'text-gray-500'}`}>
                    {onlineUsers}
                </span>
                <span className="text-gray-400 ml-0.5 sm:ml-1 hidden sm:inline">online</span>
            </span>
        </div>
    );
}
