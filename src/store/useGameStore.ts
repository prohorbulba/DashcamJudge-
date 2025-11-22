import { create } from 'zustand';
import { Scenario, SCENARIOS } from '@/lib/scenarios';

interface VotePercentages {
    cammer: number;
    other: number;
    both: number;
}

interface GameState {
    currentScenarioIndex: number;
    shuffledIndices: number[];
    hasVoted: boolean;
    userVote: 'cammer' | 'other' | 'both' | null;
    votePercentages: Record<string, VotePercentages>;

    nextScenario: () => void;
    vote: (vote: 'cammer' | 'other' | 'both') => void;
    resetGame: () => void;
    shuffleScenarios: () => void;
    getCurrentScenario: () => Scenario;
    fetchVotePercentages: (scenarioId: string) => Promise<void>;
    updateVehicleInfo: (scenarioId: string, car1: { color: string; type: string }, car2: { color: string; type: string }) => void;
    removeVideo: (scenarioId: string, reason: string) => void;
}

export const useGameStore = create<GameState>((set, get) => ({
    currentScenarioIndex: 0,
    shuffledIndices: Array.from({ length: SCENARIOS.length }, (_, i) => i),
    hasVoted: false,
    userVote: null,
    votePercentages: {},

    nextScenario: () => {
        const { currentScenarioIndex, shuffledIndices } = get();
        const nextIndex = (currentScenarioIndex + 1) % shuffledIndices.length;
        set({
            currentScenarioIndex: nextIndex,
            hasVoted: false,
            userVote: null
        });
        
        // Fetch percentages for next scenario
        const nextScenario = SCENARIOS[shuffledIndices[nextIndex]];
        get().fetchVotePercentages(nextScenario.id);
    },

    vote: async (vote) => {
        const scenario = get().getCurrentScenario();
        set({ hasVoted: true, userVote: vote });
        
        // Send vote to backend
        try {
            const response = await fetch('/api/vote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ scenarioId: scenario.id, vote })
            });
            
            const data = await response.json();
            if (data.success) {
                set(state => ({
                    votePercentages: {
                        ...state.votePercentages,
                        [scenario.id]: data.percentages
                    }
                }));
            }
        } catch (error) {
            console.error('Failed to submit vote:', error);
        }
    },

    fetchVotePercentages: async (scenarioId: string) => {
        try {
            const response = await fetch(`/api/votes/${scenarioId}`);
            const percentages = await response.json();
            set(state => ({
                votePercentages: {
                    ...state.votePercentages,
                    [scenarioId]: percentages
                }
            }));
        } catch (error) {
            console.error('Failed to fetch vote percentages:', error);
        }
    },

    resetGame: () => {
        // Reshuffle on reset
        const indices = Array.from({ length: SCENARIOS.length }, (_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        set({ 
            currentScenarioIndex: 0, 
            shuffledIndices: indices,
            hasVoted: false, 
            userVote: null 
        });
        
        // Fetch percentages for first scenario
        get().fetchVotePercentages(SCENARIOS[indices[0]].id);
    },
    
    shuffleScenarios: () => {
        const indices = Array.from({ length: SCENARIOS.length }, (_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        set({ shuffledIndices: indices });
        
        // Fetch percentages for first scenario
        get().fetchVotePercentages(SCENARIOS[indices[0]].id);
    },

    getCurrentScenario: () => {
        const { currentScenarioIndex, shuffledIndices } = get();
        const realIndex = shuffledIndices[currentScenarioIndex];
        return SCENARIOS[realIndex];
    },

    updateVehicleInfo: (scenarioId, car1, car2) => {
        const scenario = SCENARIOS.find(s => s.id === scenarioId);
        if (scenario && scenario.vehicles) {
            scenario.vehicles.cammer.color = car1.color;
            scenario.vehicles.cammer.type = car1.type;
            scenario.vehicles.other.color = car2.color;
            scenario.vehicles.other.type = car2.type;
            
            // Trigger re-render by updating state
            set(state => ({ ...state }));
        }
    },

    removeVideo: (scenarioId, reason) => {
        // Find the index of the scenario to remove
        const scenarioIndex = SCENARIOS.findIndex(s => s.id === scenarioId);
        if (scenarioIndex === -1) return;

        // Remove from SCENARIOS array
        SCENARIOS.splice(scenarioIndex, 1);

        // Update shuffledIndices to remove this scenario and adjust indices
        const { shuffledIndices, currentScenarioIndex } = get();
        const newShuffledIndices = shuffledIndices
            .filter(idx => idx !== scenarioIndex)
            .map(idx => idx > scenarioIndex ? idx - 1 : idx);

        // If we removed the current video, stay at same index (which will show next video)
        // If we removed a video before current, decrement current index
        let newCurrentIndex = currentScenarioIndex;
        if (shuffledIndices[currentScenarioIndex] === scenarioIndex) {
            // Removed current video - stay at same index
            newCurrentIndex = currentScenarioIndex % newShuffledIndices.length;
        } else if (shuffledIndices[currentScenarioIndex] > scenarioIndex) {
            // Current video's index shifted down
            newCurrentIndex = currentScenarioIndex;
        }

        set({
            shuffledIndices: newShuffledIndices,
            currentScenarioIndex: newCurrentIndex,
            hasVoted: false,
            userVote: null
        });

        // Fetch percentages for new current scenario
        if (newShuffledIndices.length > 0) {
            get().fetchVotePercentages(SCENARIOS[newShuffledIndices[newCurrentIndex]].id);
        }

        // Send removal to backend
        fetch('/api/remove-video', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ scenarioId, reason })
        }).catch(err => console.error('Failed to log video removal:', err));
    }
}));
