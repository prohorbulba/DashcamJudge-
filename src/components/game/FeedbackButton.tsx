'use client';

import { useState } from 'react';
import { useGameStore } from '@/store/useGameStore';
import { MessageCircle, X, Video } from 'lucide-react';

const COLORS = ['Red', 'Blue', 'White', 'Black', 'Silver', 'Gray', 'Green', 'Yellow', 'Orange', 'Brown', 'Purple', 'Other'];
const TYPES = ['Sedan', 'SUV', 'Truck', 'Van', 'Motorcycle', 'Bicycle', 'Pedestrian', 'Other'];
const REMOVE_REASONS = ['Boring', 'Too Long', 'Poor Quality', 'Inappropriate'];

export default function FeedbackButton() {
    const [isOpen, setIsOpen] = useState(false);
    const scenario = useGameStore((state) => state.getCurrentScenario());
    const updateVehicleInfo = useGameStore((state) => state.updateVehicleInfo);
    const removeVideo = useGameStore((state) => state.removeVideo);
    
    const [car1Color, setCar1Color] = useState('');
    const [car1Type, setCar1Type] = useState('');
    const [car1IsCammer, setCar1IsCammer] = useState(false);
    
    const [car2Color, setCar2Color] = useState('');
    const [car2Type, setCar2Type] = useState('');
    const [car2IsCammer, setCar2IsCammer] = useState(false);

    const handleCar1Cammer = () => {
        setCar1IsCammer(true);
        setCar1Color('N/A');
        setCar1Type('Witness');
        setCar2IsCammer(false);
    };

    const handleCar2Cammer = () => {
        setCar2IsCammer(true);
        setCar2Color('N/A');
        setCar2Type('Witness');
        setCar1IsCammer(false);
    };

    const handleSubmit = () => {
        // Apply changes instantly
        if ((car1Color && car1Type) && (car2Color && car2Type)) {
            updateVehicleInfo(scenario.id, 
                { color: car1Color, type: car1Type },
                { color: car2Color, type: car2Type }
            );
            
            // Also send to backend to persist
            fetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    scenarioId: scenario.id,
                    car1: { color: car1Color, type: car1Type },
                    car2: { color: car2Color, type: car2Type }
                })
            }).catch(err => console.error('Failed to save feedback:', err));
        }
        
        setIsOpen(false);
        setCar1Color('');
        setCar1Type('');
        setCar1IsCammer(false);
        setCar2Color('');
        setCar2Type('');
        setCar2IsCammer(false);
    };

    const handleRemove = (reason: string) => {
        // Instantly remove the video
        removeVideo(scenario.id, reason);
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-white/20 rounded-lg hover:bg-zinc-800 transition-colors"
            >
                <MessageCircle className="w-4 h-4" />
                Suggest Correction
            </button>

            {isOpen && (
                <div className="fixed inset-y-0 right-0 w-96 bg-zinc-900 border-l border-white/20 z-50 overflow-y-auto shadow-2xl">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">Correct Vehicle Info</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="text-sm text-gray-400 mb-6">Watch the video and update vehicle details</p>

                        {/* Car 1 */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-base font-semibold text-blue-400">Car 1</h3>
                                <button
                                    onClick={handleCar1Cammer}
                                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-all ${
                                        car1IsCammer
                                            ? 'bg-blue-500 text-white ring-2 ring-blue-400'
                                            : 'bg-zinc-800 hover:bg-zinc-700 text-gray-300'
                                    }`}
                                >
                                    <Video className="w-3 h-3" />
                                    Cammer
                                </button>
                            </div>
                            
                            <div className="mb-4">
                                <label className="text-xs text-gray-400 mb-2 block uppercase tracking-wide">Color</label>
                                <div className="grid grid-cols-3 gap-1.5">
                                    {COLORS.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => {
                                                setCar1Color(color);
                                                setCar1IsCammer(false);
                                            }}
                                            disabled={car1IsCammer}
                                            className={`px-2 py-1.5 rounded text-xs transition-colors ${
                                                car1Color === color && !car1IsCammer
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-zinc-800 hover:bg-zinc-700'
                                            } ${car1IsCammer ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-400 mb-2 block uppercase tracking-wide">Type</label>
                                <div className="grid grid-cols-2 gap-1.5">
                                    {TYPES.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => {
                                                setCar1Type(type);
                                                setCar1IsCammer(false);
                                            }}
                                            disabled={car1IsCammer}
                                            className={`px-2 py-1.5 rounded text-xs transition-colors ${
                                                car1Type === type && !car1IsCammer
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-zinc-800 hover:bg-zinc-700'
                                            } ${car1IsCammer ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Car 2 */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-base font-semibold text-red-400">Car 2</h3>
                                <button
                                    onClick={handleCar2Cammer}
                                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-all ${
                                        car2IsCammer
                                            ? 'bg-red-500 text-white ring-2 ring-red-400'
                                            : 'bg-zinc-800 hover:bg-zinc-700 text-gray-300'
                                    }`}
                                >
                                    <Video className="w-3 h-3" />
                                    Cammer
                                </button>
                            </div>
                            
                            <div className="mb-4">
                                <label className="text-xs text-gray-400 mb-2 block uppercase tracking-wide">Color</label>
                                <div className="grid grid-cols-3 gap-1.5">
                                    {COLORS.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => {
                                                setCar2Color(color);
                                                setCar2IsCammer(false);
                                            }}
                                            disabled={car2IsCammer}
                                            className={`px-2 py-1.5 rounded text-xs transition-colors ${
                                                car2Color === color && !car2IsCammer
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-zinc-800 hover:bg-zinc-700'
                                            } ${car2IsCammer ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-400 mb-2 block uppercase tracking-wide">Type</label>
                                <div className="grid grid-cols-2 gap-1.5">
                                    {TYPES.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => {
                                                setCar2Type(type);
                                                setCar2IsCammer(false);
                                            }}
                                            disabled={car2IsCammer}
                                            className={`px-2 py-1.5 rounded text-xs transition-colors ${
                                                car2Type === type && !car2IsCammer
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-zinc-800 hover:bg-zinc-700'
                                            } ${car2IsCammer ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={!car1Color || !car1Type || !car2Color || !car2Type}
                            className="w-full py-2.5 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors mb-4 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                            Submit Correction
                        </button>

                        {/* Remove Video Section */}
                        <div className="pt-4 border-t border-white/20">
                            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Remove Video</p>
                            <div className="grid grid-cols-2 gap-1.5">
                                {REMOVE_REASONS.map((reason) => (
                                    <button
                                        key={reason}
                                        onClick={() => handleRemove(reason)}
                                        className="px-2 py-1.5 bg-red-900/30 hover:bg-red-900/50 border border-red-500/30 rounded text-xs transition-colors"
                                    >
                                        {reason}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
