'use client';

import { useState, useEffect } from 'react';
import { SCENARIOS } from '@/lib/scenarios';
import { ChevronLeft, ChevronRight, Download, Video, Copy } from 'lucide-react';

const COLORS = [
    'White', 'Black', 'Silver', 'Gray', 'Red', 'Blue', 'Green',
    'Yellow', 'Orange', 'Brown', 'Beige', 'Gold', 'Purple', 'Pink', 'Unknown'
];

const VEHICLE_TYPES = [
    'Sedan', 'SUV', 'Truck', 'Van', 'Hatchback', 'Coupe',
    'Motorcycle', 'Bus', 'Semi', 'Bicycle', 'Pedestrian', 'Car', 'Camera'
];

interface VehicleLabel {
    color: string;
    type: string;
    isCammer?: boolean;
}

const STORAGE_KEY = 'dashcam-vehicle-labels';

export default function LabelVehiclesPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [labels, setLabels] = useState<Record<string, { vehicle1: VehicleLabel; vehicle2: VehicleLabel }>>({});

    // Load from localStorage or SCENARIOS on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setLabels(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to load saved labels:', e);
            }
        } else {
            // Initialize from SCENARIOS if available
            const initialLabels: Record<string, { vehicle1: VehicleLabel; vehicle2: VehicleLabel }> = {};
            let hasInitial = false;
            SCENARIOS.forEach(s => {
                if (s.vehicles) {
                    hasInitial = true;
                    initialLabels[s.id] = {
                        vehicle1: s.vehicles.cammer,
                        vehicle2: s.vehicles.other
                    };
                }
            });
            if (hasInitial) {
                setLabels(initialLabels);
            }
        }
    }, []);

    // Save to localStorage whenever labels change
    useEffect(() => {
        if (Object.keys(labels).length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(labels));
        }
    }, [labels]);

    const scenario = SCENARIOS[currentIndex];
    const currentLabel = labels[scenario.id] || {
        vehicle1: { color: 'White', type: 'Sedan', isCammer: true },
        vehicle2: { color: 'Black', type: 'Sedan', isCammer: false }
    };

    const updateVehicle = (vehicle: 'vehicle1' | 'vehicle2', field: 'color' | 'type', value: string) => {
        setLabels(prev => ({
            ...prev,
            [scenario.id]: {
                ...currentLabel,
                [vehicle]: {
                    ...currentLabel[vehicle],
                    [field]: value
                }
            }
        }));
    };

    const setCammer = (vehicle: 'vehicle1' | 'vehicle2') => {
        setLabels(prev => ({
            ...prev,
            [scenario.id]: {
                ...currentLabel,
                vehicle1: { ...currentLabel.vehicle1, isCammer: vehicle === 'vehicle1' },
                vehicle2: { ...currentLabel.vehicle2, isCammer: vehicle === 'vehicle2' }
            }
        }));
    };

    const exportLabels = () => {
        const output = SCENARIOS.map(s => {
            const label = labels[s.id];
            if (!label) return null;

            // Determine which is cammer and which is other
            const cammerVehicle = label.vehicle1.isCammer ? label.vehicle1 : label.vehicle2;
            const otherVehicle = label.vehicle1.isCammer ? label.vehicle2 : label.vehicle1;

            return {
                id: s.id,
                title: s.title,
                videoUrl: s.videoUrl,
                cammer: `${cammerVehicle.color} ${cammerVehicle.type}`,
                other: `${otherVehicle.color} ${otherVehicle.type}`,
                votes: s.votes
            };
        }).filter(Boolean);

        const blob = new Blob([JSON.stringify(output, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'vehicle-labels.json';
        a.click();
    };

    const copyConfig = () => {
        const output = SCENARIOS.map(s => {
            // Use label if exists, otherwise try to fallback to existing scenario data, or skip
            let label = labels[s.id];
            if (!label && s.vehicles) {
                label = {
                    vehicle1: s.vehicles.cammer,
                    vehicle2: s.vehicles.other
                };
            }
            
            if (!label) {
                // If we haven't labelled it and it's not in the code, keep the original without vehicles
                 return `    {
        id: '${s.id}',
        title: "${s.title.replace(/"/g, '\\"')}",
        videoUrl: '${s.videoUrl}',
        votes: { cammer: ${s.votes.cammer}, other: ${s.votes.other}, both: ${s.votes.both} }
    }`;
            }

            const cammerVehicle = label.vehicle1.isCammer ? label.vehicle1 : label.vehicle2;
            const otherVehicle = label.vehicle1.isCammer ? label.vehicle2 : label.vehicle1;

            return `    {
        id: '${s.id}',
        title: "${s.title.replace(/"/g, '\\"')}",
        videoUrl: '${s.videoUrl}',
        votes: { cammer: ${s.votes.cammer}, other: ${s.votes.other}, both: ${s.votes.both} },
        vehicles: {
            cammer: { color: '${cammerVehicle.color}', type: '${cammerVehicle.type}', isCammer: true },
            other: { color: '${otherVehicle.color}', type: '${otherVehicle.type}', isCammer: false }
        }
    }`;
        }).join(',\n');
        
        const finalOutput = `export const SCENARIOS: Scenario[] = [\n${output}\n];`;
        
        navigator.clipboard.writeText(finalOutput);
        alert('Copied SCENARIOS configuration to clipboard!');
    }

    const progress = Object.keys(labels).length;
    const total = SCENARIOS.length;

    return (
        <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-4">
            <div className="h-full w-full flex flex-col">
                {/* Compact Header */}
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Vehicle Labeling</h1>
                        <p className="text-sm text-slate-400">Video {currentIndex + 1}/{total} • {progress} labeled</p>
                    </div>
                    <div className="flex gap-2">
                         <button
                            onClick={copyConfig}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 text-sm"
                        >
                            <Copy className="w-4 h-4" />
                            Copy Config
                        </button>
                        <button
                            onClick={exportLabels}
                            disabled={progress === 0}
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-700 text-white rounded-lg flex items-center gap-2 text-sm"
                        >
                            <Download className="w-4 h-4" />
                            Export JSON
                        </button>
                    </div>
                </div>

                {/* Main Content - Side by Side */}
                <div className="grid grid-cols-[55%,45%] gap-4 flex-1 min-h-0 overflow-hidden">
                    {/* Video - Left Side */}
                    <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex flex-col min-w-0">
                        <p className="text-slate-300 text-sm mb-3 truncate">{scenario.title}</p>
                        <div className="flex-1 bg-black rounded-lg overflow-hidden min-h-0">
                            <video
                                key={scenario.id}
                                src={scenario.videoUrl}
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                                loop
                            />
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <button
                                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                                disabled={currentIndex === 0}
                                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-900 disabled:cursor-not-allowed text-white rounded-lg flex items-center gap-2 text-sm"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Prev
                            </button>

                            <button
                                onClick={() => setCurrentIndex(Math.min(SCENARIOS.length - 1, currentIndex + 1))}
                                disabled={currentIndex === SCENARIOS.length - 1}
                                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-900 disabled:cursor-not-allowed text-white rounded-lg flex items-center gap-2 text-sm"
                            >
                                Next
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Vehicle Selection - Right Side (Stacked) */}
                    <div className="flex flex-col gap-4 overflow-y-auto min-w-0">
                        {/* Vehicle 1 */}
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-blue-500/30 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-bold text-blue-400">Vehicle 1</h3>
                                <button
                                    onClick={() => setCammer('vehicle1')}
                                    className={`px-3 py-1 text-xs rounded-full transition-all ${currentLabel.vehicle1.isCammer
                                        ? 'bg-blue-600 text-white font-bold ring-2 ring-blue-400'
                                        : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                                        }`}
                                >
                                    <Video className="w-3 h-3 inline mr-1" />
                                    Cammer
                                </button>
                            </div>
                            <div className="text-white font-medium text-sm mb-3">
                                {currentLabel.vehicle1.color} {currentLabel.vehicle1.type}
                            </div>

                            {/* Color Buttons */}
                            <div className="mb-4">
                                <label className="block text-xs font-medium text-slate-400 mb-2">Color</label>
                                <div className="grid grid-cols-4 gap-1.5">
                                    {COLORS.map(color => (
                                        <button
                                            key={color}
                                            onClick={() => updateVehicle('vehicle1', 'color', color)}
                                            className={`px-2 py-1.5 text-xs rounded transition-all ${currentLabel.vehicle1.color === color
                                                ? 'bg-blue-600 text-white font-bold ring-2 ring-blue-400'
                                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Type Buttons */}
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-2">Type</label>
                                <div className="grid grid-cols-3 gap-1.5">
                                    {VEHICLE_TYPES.map(type => (
                                        <button
                                            key={type}
                                            onClick={() => updateVehicle('vehicle1', 'type', type)}
                                            className={`px-2 py-1.5 text-xs rounded transition-all ${currentLabel.vehicle1.type === type
                                                ? 'bg-blue-600 text-white font-bold ring-2 ring-blue-400'
                                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Vehicle 2 - Right */}
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-red-500/30 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-bold text-red-400">Vehicle 2</h3>
                                <button
                                    onClick={() => setCammer('vehicle2')}
                                    className={`px-3 py-1 text-xs rounded-full transition-all ${currentLabel.vehicle2.isCammer
                                        ? 'bg-red-600 text-white font-bold ring-2 ring-red-400'
                                        : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                                        }`}
                                >
                                    <Video className="w-3 h-3 inline mr-1" />
                                    Cammer
                                </button>
                            </div>
                            <div className="text-white font-medium text-sm mb-3">
                                {currentLabel.vehicle2.color} {currentLabel.vehicle2.type}
                            </div>

                            {/* Color Buttons */}
                            <div className="mb-4">
                                <label className="block text-xs font-medium text-slate-400 mb-2">Color</label>
                                <div className="grid grid-cols-4 gap-1.5">
                                    {COLORS.map(color => (
                                        <button
                                            key={color}
                                            onClick={() => updateVehicle('vehicle2', 'color', color)}
                                            className={`px-2 py-1.5 text-xs rounded transition-all ${currentLabel.vehicle2.color === color
                                                ? 'bg-red-600 text-white font-bold ring-2 ring-red-400'
                                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Type Buttons */}
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-2">Type</label>
                                <div className="grid grid-cols-3 gap-1.5">
                                    {VEHICLE_TYPES.map(type => (
                                        <button
                                            key={type}
                                            onClick={() => updateVehicle('vehicle2', 'type', type)}
                                            className={`px-2 py-1.5 text-xs rounded transition-all ${currentLabel.vehicle2.type === type
                                                ? 'bg-red-600 text-white font-bold ring-2 ring-red-400'
                                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
