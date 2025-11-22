'use client';

import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { useGameStore } from '@/store/useGameStore';

const COLORS = ['Red', 'Blue', 'White', 'Black', 'Silver', 'Gray', 'Green', 'Yellow', 'Orange', 'Brown', 'Purple', 'Other'];
const TYPES = ['Sedan', 'SUV', 'Truck', 'Van', 'Motorcycle', 'Bicycle', 'Pedestrian', 'Other'];

export default function FeedbackButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const scenario = useGameStore((state) => state.getCurrentScenario());
    
    const [car1Color, setCar1Color] = useState('');
    const [car1Type, setCar1Type] = useState('');
    const [car2Color, setCar2Color] = useState('');
    const [car2Type, setCar2Type] = useState('');

    const handleSubmit = () => {
        console.log('Correction for scenario', scenario.id, {
            car1: { color: car1Color, type: car1Type },
            car2: { color: car2Color, type: car2Type }
        });
        setSubmitted(true);
        setTimeout(() => {
            setIsOpen(false);
            setSubmitted(false);
            setCar1Color('');
            setCar1Type('');
            setCar2Color('');
            setCar2Type('');
        }, 2000);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all text-sm"
            >
                <MessageSquare className="w-4 h-4" />
                Suggest Correction
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-zinc-900 border border-white/20 rounded-2xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-white/60 hover:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {!submitted ? (
                            <>
                                <h2 className="text-xl font-bold mb-2">Suggest Correction</h2>
                                <p className="text-sm text-white/60 mb-6">
                                    Correct the vehicles involved in this incident
                                </p>

                                {/* Car 1 */}
                                <div className="mb-6">
                                    <h3 className="font-bold mb-3">Car 1 (Cammer/First Party)</h3>
                                    
                                    <label className="block text-sm mb-2">Color</label>
                                    <div className="grid grid-cols-4 gap-2 mb-4">
                                        {COLORS.map(color => (
                                            <button
                                                key={color}
                                                onClick={() => setCar1Color(color)}
                                                className={`px-3 py-2 rounded-lg border transition-all text-sm ${
                                                    car1Color === color 
                                                        ? 'bg-blue-500 border-blue-400 text-white' 
                                                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                                                }`}
                                            >
                                                {color}
                                            </button>
                                        ))}
                                    </div>

                                    <label className="block text-sm mb-2">Type</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {TYPES.map(type => (
                                            <button
                                                key={type}
                                                onClick={() => setCar1Type(type)}
                                                className={`px-3 py-2 rounded-lg border transition-all text-sm ${
                                                    car1Type === type 
                                                        ? 'bg-blue-500 border-blue-400 text-white' 
                                                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                                                }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Car 2 */}
                                <div className="mb-6">
                                    <h3 className="font-bold mb-3">Car 2 (Other Party)</h3>
                                    
                                    <label className="block text-sm mb-2">Color</label>
                                    <div className="grid grid-cols-4 gap-2 mb-4">
                                        {COLORS.map(color => (
                                            <button
                                                key={color}
                                                onClick={() => setCar2Color(color)}
                                                className={`px-3 py-2 rounded-lg border transition-all text-sm ${
                                                    car2Color === color 
                                                        ? 'bg-red-500 border-red-400 text-white' 
                                                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                                                }`}
                                            >
                                                {color}
                                            </button>
                                        ))}
                                    </div>

                                    <label className="block text-sm mb-2">Type</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {TYPES.map(type => (
                                            <button
                                                key={type}
                                                onClick={() => setCar2Type(type)}
                                                className={`px-3 py-2 rounded-lg border transition-all text-sm ${
                                                    car2Type === type 
                                                        ? 'bg-red-500 border-red-400 text-white' 
                                                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                                                }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={!car1Color || !car1Type || !car2Color || !car2Type}
                                    className="w-full mt-4 px-4 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    Submit Correction
                                </button>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="text-4xl mb-2">✓</div>
                                <h3 className="text-xl font-bold mb-1">Thank you!</h3>
                                <p className="text-sm text-white/60">Your correction has been recorded.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
