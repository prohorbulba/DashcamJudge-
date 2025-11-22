'use client';

import { useState } from 'react';
import { useGameStore } from '@/store/useGameStore';
import { MessageCircle, X } from 'lucide-react';

const COLORS = ['Red', 'Blue', 'White', 'Black', 'Silver', 'Gray', 'Green', 'Yellow', 'Orange', 'Brown', 'Purple', 'Other'];
const TYPES = ['Sedan', 'SUV', 'Truck', 'Van', 'Motorcycle', 'Bicycle', 'Pedestrian', 'Other'];
const REMOVE_REASONS = ['Boring', 'Too Long', 'Poor Quality', 'Inappropriate'];

export default function FeedbackButton() {
    const [isOpen, setIsOpen] = useState(false);
    const scenario = useGameStore((state) => state.getCurrentScenario());
    
    const [car1Color, setCar1Color] = useState('');
    const [car1Type, setCar1Type] = useState('');
    const [car2Color, setCar2Color] = useState('');
    const [car2Type, setCar2Type] = useState('');

    const handleSubmit = () => {
        console.log('Feedback submitted:', {
            scenarioId: scenario.id,
            car1: { color: car1Color, type: car1Type },
            car2: { color: car2Color, type: car2Type }
        });
        setIsOpen(false);
        setCar1Color('');
        setCar1Type('');
        setCar2Color('');
        setCar2Type('');
    };

    const handleRemove = (reason: string) => {
        console.log('Remove video:', {
            scenarioId: scenario.id,
            reason
        });
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
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-zinc-900 border border-white/20 rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">Correct Vehicle Info</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="text-sm text-gray-400 mb-6">Update the vehicles involved</p>

                        {/* Car 1 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Car 1</h3>
                            
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-2 block">Color</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {COLORS.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setCar1Color(color)}
                                            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                                                car1Color === color
                                                    ? 'bg-white text-black'
                                                    : 'bg-zinc-800 hover:bg-zinc-700'
                                            }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm text-gray-400 mb-2 block">Type</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {TYPES.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setCar1Type(type)}
                                            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                                                car1Type === type
                                                    ? 'bg-white text-black'
                                                    : 'bg-zinc-800 hover:bg-zinc-700'
                                            }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Car 2 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Car 2</h3>
                            
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-2 block">Color</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {COLORS.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setCar2Color(color)}
                                            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                                                car2Color === color
                                                    ? 'bg-white text-black'
                                                    : 'bg-zinc-800 hover:bg-zinc-700'
                                            }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm text-gray-400 mb-2 block">Type</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {TYPES.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setCar2Type(type)}
                                            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                                                car2Type === type
                                                    ? 'bg-white text-black'
                                                    : 'bg-zinc-800 hover:bg-zinc-700'
                                            }`}
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
                            className="w-full py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors mb-4"
                        >
                            Submit Correction
                        </button>

                        {/* Remove Video Section */}
                        <div className="pt-4 border-t border-white/20">
                            <p className="text-sm text-gray-400 mb-3">Remove Video</p>
                            <div className="grid grid-cols-2 gap-2">
                                {REMOVE_REASONS.map((reason) => (
                                    <button
                                        key={reason}
                                        onClick={() => handleRemove(reason)}
                                        className="px-3 py-2 bg-red-900/30 hover:bg-red-900/50 border border-red-500/30 rounded-lg text-sm transition-colors"
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
