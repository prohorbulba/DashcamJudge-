import { create } from 'zustand';
import { Scenario, SCENARIOS } from '@/lib/scenarios';

interface GameState {
    currentScenarioIndex: number;
    shuffledIndices: number[];
    hasVoted: boolean;
    userVote: 'cammer' | 'other' | 'both' | null;
    votePercentages: { cammer: number; other: number; both: number } | null;

    nextScenario: () => void;
    vote: (vote: 'cammer' | 'other' | 'both') => void;
    resetGame: () => void;
    shuffleScenarios: () => void;
    getCurrentScenario: () => Scenario;
}

export const useGameStore = create<GameState>((set, get) => ({
    currentScenarioIndex: 0,
    shuffledIndices: Array.from({ length: SCENARIOS.length }, (_, i) => i),
    hasVoted: false,
    userVote: null,
    votePercentages: null,

    nextScenario: () => {
        const { currentScenarioIndex, shuffledIndices } = get();
        const nextIndex = (currentScenarioIndex + 1) % shuffledIndices.length;
        set({
            currentScenarioIndex: nextIndex,
            hasVoted: false,
            userVote: null,
            votePercentages: null
        });
    },

    vote: async (vote) => {
        const scenario = get().getCurrentScenario();
        
        try {
            // Send vote to server
            const response = await fetch('/api/vote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ scenarioId: scenario.id, vote })
            });
            
            const data = await response.json();
            
            set({ 
                hasVoted: true, 
                userVote: vote,
                votePercentages: data.percentages
            });
        } catch (error) {
            console.error('Failed to submit vote:', error);
            // Fallback to local state if server fails
            set({ hasVoted: true, userVote: vote });
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
            userVote: null,
            votePercentages: null
        });
    },
    
    shuffleScenarios: () => {
        const indices = Array.from({ length: SCENARIOS.length }, (_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        set({ shuffledIndices: indices });
    },

    getCurrentScenario: () => {
        const { currentScenarioIndex, shuffledIndices } = get();
        const realIndex = shuffledIndices[currentScenarioIndex];
        return SCENARIOS[realIndex];
    }
}));
