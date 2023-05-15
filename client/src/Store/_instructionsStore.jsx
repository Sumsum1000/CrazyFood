import { create } from "zustand";

export const instructionsStore = create((set) => ({
  instructions: [],
  addInstruction: (instruction) => {
    set((state) => ({ instructions: [...state.instructions, instruction] }));
  },
  removeInstructions: (updatedInstructions) => {
    set((state) => ({
      instructions: updatedInstructions,
    }));
  },
  resetInstructions: () => {
    set((state) => ({
      instructions: [],
    }));
  },
}));
