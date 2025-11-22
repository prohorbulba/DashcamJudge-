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
        if (car1IsCammer) {
            // Unclick - reset to empty
            setCar1IsCammer(false);
            setCar1Color('');
            setCar1Type('');
        } else {
            // Click - set as cammer
            setCar1IsCammer(true);
            setCar1Color('N/A');
            setCar1Type('Witness');
            setCar2IsCammer(false);
        }
    };

    const handleCar2Cammer = () => {
        if (car2IsCammer) {
            // Unclick - reset to empty
            setCar2IsCammer(false);
            setCar2Color('');
            setCar2Type('');
        } else {
            // Click - set as cammer
            setCar2IsCammer(true);
            setCar2Color('N/A');
            setCar2Type('Witness');
            setCar1IsCammer(false);
        }
    };

    const handleSubmit = () => {
        if ((car1Color && car1Type) && (car2Color && car2Type)) {
            updateVehicleInfo(scenario.id, 
                { color: car1Color, type: car1Type },
                { color: car2Color, type: car2Type }
            );
            
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
                <div className="fixed inset-y-0 right-0 w-80 bg-zinc-900 border-l border-white/20 z-50 flex flex-col shadow-2xl">
                    {/* Header - Fixed */}
                    <div className="flex-none p-4 border-b border-white/20">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold">Correct Vehicles</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Watch video & update details</p>
                    </div>

                    {/* Content - Scrollable if needed */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {/* Car 1 */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-semibold text-blue-400">Car 1</h3>
                                <button
                                    onClick={handleCar1Cammer}
                                    className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-xs transition-all ${
                                        car1IsCammer ? 'bg-blue-500 text-white ring-1 ring-blue-400' : 'bg-zinc-800 hover:bg-zinc-700 text-gray-300'
                                    }`}
                                >
                                    <Video className="w-3 h-3" />
                                    {car1IsCammer ? '✓ Cammer' : 'Cammer'}
                                </button>
                            </div>
                            
                            <div className="mb-3">
                                <label className="text-[10px] text-gray-400 mb-1 block uppercase tracking-wide">Color</label>
                                <div className="grid grid-cols-3 gap-1">
                                    {COLORS.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => { setCar1Color(color); setCar1IsCammer(false); }}
                                            disabled={car1IsCammer}
                                            className={`px-1.5 py-1 rounded text-[10px] transition-colors ${
                                                car1Color === color && !car1IsCammer ? 'bg-blue-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700'
                                            } ${car1IsCammer ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] text-gray-400 mb-1 block uppercase tracking-wide">Type</label>
                                <div className="grid grid-cols-2 gap-1">
                                    {TYPES.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => { setCar1Type(type); setCar1IsCammer(false); }}
                                            disabled={car1IsCammer}
                                            className={`px-1.5 py-1 rounded text-[10px] transition-colors ${
                                                car1Type === type && !car1IsCammer ? 'bg-blue-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700'
                                            } ${car1IsCammer ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Car 2 */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-semibold text-red-400">Car 2</h3>
                                <button
                                    onClick={handleCar2Cammer}
                                    className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-xs transition-all ${
                                        car2IsCammer ? 'bg-red-500 text-white ring-1 ring-red-400' : 'bg-zinc-800 hover:bg-zinc-700 text-gray-300'
                                    }`}
                                >
                                    <Video className="w-3 h-3" />
                                    {car2IsCammer ? '✓ Cammer' : 'Cammer'}
                                </button>
                            </div>
                            
                            <div className="mb-3">
                                <label className="text-[10px] text-gray-400 mb-1 block uppercase tracking-wide">Color</label>
                                <div className="grid grid-cols-3 gap-1">
                                    {COLORS.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => { setCar2Color(color); setCar2IsCammer(false); }}
                                            disabled={car2IsCammer}
                                            className={`px-1.5 py-1 rounded text-[10px] transition-colors ${
                                                car2Color === color && !car2IsCammer ? 'bg-red-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700'
                                            } ${car2IsCammer ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] text-gray-400 mb-1 block uppercase tracking-wide">Type</label>
                                <div className="grid grid-cols-2 gap-1">
                                    {TYPES.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => { setCar2Type(type); setCar2IsCammer(false); }}
                                            disabled={car2IsCammer}
                                            className={`px-1.5 py-1 rounded text-[10px] transition-colors ${
                                                car2Type === type && !car2IsCammer ? 'bg-red-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700'
                                            } ${car2IsCammer ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Remove Video */}
                        <div className="pt-3 border-t border-white/20">
                            <label className="text-[10px] text-gray-400 mb-1 block uppercase tracking-wide">Remove Video</label>
                            <div className="grid grid-cols-2 gap-1">
                                {REMOVE_REASONS.map((reason) => (
                                    <button
                                        key={reason}
                                        onClick={() => handleRemove(reason)}
                                        className="px-1.5 py-1 bg-red-900/30 hover:bg-red-900/50 border border-red-500/30 rounded text-[10px] transition-colors"
                                    >
                                        {reason}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer - Fixed */}
                    <div className="flex-none p-4 border-t border-white/20">
                        <button
                            onClick={handleSubmit}
                            disabled={!car1Color || !car1Type || !car2Color || !car2Type}
                            className="w-full py-2 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                            Submit Correction
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
