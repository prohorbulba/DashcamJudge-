'use client';

import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { io, Socket } from 'socket.io-client';

export default function OnlineUsersTracker() {
    const [onlineUsers, setOnlineUsers] = useState<number>(0);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        // Connect to socket
        const socketUrl = process.env.NODE_ENV === 'production' 
            ? window.location.origin 
            : 'http://localhost:3000';
        
        const newSocket = io(socketUrl);
        setSocket(newSocket);

        // Listen for online users updates
        newSocket.on('online_users', (count: number) => {
            setOnlineUsers(count);
        });

        // Cleanup on unmount
        return () => {
            newSocket.close();
        };
    }, []);

    return (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 border border-white/20 rounded-lg">
            <Users className="w-4 h-4 text-green-400" />
            <span className="text-sm font-mono">
                <span className="text-green-400 font-bold">{onlineUsers}</span>
                <span className="text-gray-400 ml-1">online</span>
            </span>
        </div>
    );
}
