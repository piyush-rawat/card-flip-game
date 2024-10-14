import { create } from "zustand";
import { Difficulty } from "./types";

interface GameStore {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  difficulty: "Normal",
  setDifficulty: (diff: Difficulty) => set({ difficulty: diff }),
}));
