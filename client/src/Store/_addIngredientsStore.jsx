import { create } from "zustand";

export const addIngredientsStore = create((set) => ({
  ingredients: [],
  addIngredient: (ingredient) => {
    set((state) => ({ ingredients: [...state.ingredients, ingredient] }));
  },
  removeIngredient: (element) => {
    set((state) => ({
      ingredients: state.ingredients.filter((e, i) => indexOf(e) !== i),
    }));
  },
}));
