'use client';

import { useState } from 'react';
import { MessageSquare, X, Flag, Trash2 } from 'lucide-react';
import { useGameStore } from '@/store/useGameStore';

const COLORS = ['Red', 'Blue', 'White', 'Black', 'Silver', 'Gray', 'Green', 'Yellow', 'Orange', 'Brown', 'Purple', 'Other'];
const TYPES = ['Sedan', 'SUV', 'Truck', 'Van', 'Motorcycle', 'Bicycle', 'Pedestrian', 'Other'];

export default function FeedbackButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [feedbackType, setFeedbackType] = useState<'correction' | 'report' | null>(null);
    const scenario = useGameStore((state) => state.getCurrentScenario());
    
    const [car1Color, setCar1Color] = useState('');
    const [car1Type, setCar1Type] = useState('');
    const [car2Color, setCar2Color] = useState('');
    const [car2Type, setCar2Type] = useState('');
    const [reportReason, setReportReason] = useState('');

    const handleCorrection = () => {
        console.log('Correction for scenario', scenario.id, {
            type: 'correction',
            car1: { color: car1Color, type: car1Type },
            car2: { color: car2Color, type: car2Type }
        });
        setSubmitted(true);
        resetAndClose();
    };

    const handleReport = (reason: string) => {
        console.log('Report for scenario', scenario.id, {
            type: 'report',
            reason: reason
        });
        setReportReason(reason);
        setSubmitted(true);
        resetAndClose();
    };

    const resetAndClose = () => {
        setTimeout(() => {
            setIsOpen(false);
            setSubmitted(false);
            setFeedbackType(null);
            setCar1Color('');
            setCar1Type('');
            setCar2Color('');
            setCar2Type('');
            setReportReason('');
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
                            onClick={() => {
                                setIsOpen(false);
                                setFeedbackType(null);
                            }}
                            className="absolute top-4 right-4 text-white/60 hover:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {!submitted ? (
                            <>
                                {!feedbackType ? (
                                    <>
                                        <h2 className="text-xl font-bold mb-2">Feedback</h2>
                                        <p className="text-sm text-white/60 mb-6">
                                            Choose what you'd like to report
                                        </p>

                                        <div className="grid grid-cols-1 gap-3">
                                            <button
                                                onClick={() => setFeedbackType('correction')}
                                                className="flex items-center gap-3 p-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg transition-all text-left"
                                            >
                                                <MessageSquare className="w-5 h-5 text-blue-400" />
                                                <div>
                                                    <div className="font-bold">Correct Vehicle Info</div>
                                                    <div className="text-xs text-white/60">Fix car colors or types</div>
                                                </div>
                                            </button>

                                            <button
                                                onClick={() => handleReport('boring')}
                                                className="flex items-center gap-3 p-4 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-lg transition-all text-left"
                                            >
                                                <Trash2 className="w-5 h-5 text-yellow-400" />
                                                <div>
                                                    <div className="font-bold">Remove: Boring</div>
                                                    <div className="text-xs text-white/60">Nothing interesting happens</div>
                                                </div>
                                            </button>

                                            <button
                                                onClick={() => handleReport('too_long')}
                                                className="flex items-center gap-3 p-4 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-lg transition-all text-left"
                                            >
                                                <Trash2 className="w-5 h-5 text-orange-400" />
                                                <div>
                                                    <div className="font-bold">Remove: Too Long</div>
                                                    <div className="text-xs text-white/60">Video is too long (over 25s)</div>
                                                </div>
                                            </button>

                                            <button
                                                onClick={() => handleReport('poor_quality')}
                                                className="flex items-center gap-3 p-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg transition-all text-left"
                                            >
                                                <Trash2 className="w-5 h-5 text-red-400" />
                                                <div>
                                                    <div className="font-bold">Remove: Poor Quality</div>
                                                    <div className="text-xs text-white/60">Can't see what's happening</div>
                                                </div>
                                            </button>

                                            <button
                                                onClick={() => handleReport('inappropriate')}
                                                className="flex items-center gap-3 p-4 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg transition-all text-left"
                                            >
                                                <Flag className="w-5 h-5 text-purple-400" />
                                                <div>
                                                    <div className="font-bold">Flag: Inappropriate</div>
                                                    <div className="text-xs text-white/60">Content violation</div>
                                                </div>
                                            </button>
                                        </div>
                                    </>
                                ) : feedbackType === 'correction' ? (
                                    <>
                                        <button
                                            onClick={() => setFeedbackType(null)}
                                            className="text-sm text-white/60 hover:text-white mb-4"
                                        >
                                            ← Back
                                        </button>
                                        <h2 className="text-xl font-bold mb-2">Correct Vehicle Info</h2>
                                        <p className="text-sm text-white/60 mb-6">
                                            Update the vehicles involved
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
                                            onClick={handleCorrection}
                                            disabled={!car1Color || !car1Type || !car2Color || !car2Type}
                                            className="w-full mt-4 px-4 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        >
                                            Submit Correction
                                        </button>
                                    </>
                                ) : null}
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="text-4xl mb-2">✓</div>
                                <h3 className="text-xl font-bold mb-1">Thank you!</h3>
                                <p className="text-sm text-white/60">Your feedback has been recorded.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
