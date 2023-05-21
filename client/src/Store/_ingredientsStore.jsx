import { create } from "zustand";

export const ingredientsStore = create((set) => ({
  ingredients: [],
  addIngredient: (ingredient) => {
    set((state) => ({ ingredients: [...state.ingredients, ingredient] }));
  },
  removeIngredient: (updatedIngredients) => {
    set((state) => ({
      ingredients: updatedIngredients,
    }));
  },
  resetIngredients: () => {
    set(() => ({
      ingredients: [],
    }));
  },
  setIngredients: (arr) => {
    set(() => ({
      ingredients: arr,
    }));
  },
}));
