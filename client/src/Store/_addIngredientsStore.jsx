import { create } from "zustand";

export const addIngredientsStore = create((set) => ({
  ingredients: [],
  addIngredient: (ingredient) => {
    set((state) => ({ ingredients: [...state.ingredients, ingredient] }));
  },
  removeIngredient: (updatedIngredients) => {
    set((state) => ({
      ingredients: updatedIngredients,
    }));
  },
}));
