'use client';

import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { useGameStore } from '@/store/useGameStore';

export default function FeedbackButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const scenario = useGameStore((state) => state.getCurrentScenario());

    const handleSubmit = () => {
        // Here you would send feedback to your backend
        console.log('Feedback for scenario', scenario.id, ':', feedback);
        setSubmitted(true);
        setTimeout(() => {
            setIsOpen(false);
            setSubmitted(false);
            setFeedback('');
        }, 2000);
    };

    return (
        <>
            {/* Feedback Button - Desktop only */}
            <button
                onClick={() => setIsOpen(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all text-sm"
            >
                <MessageSquare className="w-4 h-4" />
                Suggest Correction
            </button>

            {/* Feedback Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-zinc-900 border border-white/20 rounded-2xl max-w-md w-full p-6 relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-white/60 hover:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {!submitted ? (
                            <>
                                <h2 className="text-xl font-bold mb-2">Suggest Correction</h2>
                                <p className="text-sm text-white/60 mb-4">
                                    Help improve accuracy by suggesting corrections to the vehicle descriptions or parties involved.
                                </p>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">Current Scenario:</label>
                                    <div className="text-xs text-white/60 bg-black/30 p-3 rounded-lg">
                                        {scenario.vehicles?.cammer && (
                                            <div>
                                                <strong>Cammer:</strong> {scenario.vehicles.cammer.color} {scenario.vehicles.cammer.type}
                                            </div>
                                        )}
                                        {scenario.vehicles?.other && (
                                            <div>
                                                <strong>Other:</strong> {scenario.vehicles.other.color} {scenario.vehicles.other.type}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <textarea
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    placeholder="Describe what should be corrected (e.g., 'The cammer is not involved, it's between a red sedan and blue truck')"
                                    className="w-full h-32 p-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 resize-none"
                                />

                                <button
                                    onClick={handleSubmit}
                                    disabled={!feedback.trim()}
                                    className="w-full mt-4 px-4 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    Submit Suggestion
                                </button>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="text-4xl mb-2">✓</div>
                                <h3 className="text-xl font-bold mb-1">Thank you!</h3>
                                <p className="text-sm text-white/60">Your suggestion has been recorded.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
