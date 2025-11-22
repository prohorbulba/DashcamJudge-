import { create } from 'zustand';
import { Scenario, SCENARIOS } from '@/lib/scenarios';

interface GameState {
    currentScenarioIndex: number;
    shuffledIndices: number[];
    hasVoted: boolean;
    userVote: 'cammer' | 'other' | 'both' | null;

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

    nextScenario: () => {
        const { currentScenarioIndex, shuffledIndices } = get();
        const nextIndex = (currentScenarioIndex + 1) % shuffledIndices.length;
        set({
            currentScenarioIndex: nextIndex,
            hasVoted: false,
            userVote: null
        });
    },

    vote: (vote) => {
        set({ hasVoted: true, userVote: vote });
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

