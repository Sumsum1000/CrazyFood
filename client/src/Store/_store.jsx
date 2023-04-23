import { create } from "zustand";
//import { Recipe, RootState } from "./types";

export const recipesStore = create((set) => ({
  recipes: [
    {
      name: "start",
      prepTime: 1.5,
      cookTime: 12,
      ingredients: ["pasta", "beef"],
      instructions: ["cut", "cook", "eat"],
    },
  ],
  setRecipes: (existRecipes) => set((state) => ({ recipes: existRecipes })),
})); //as Recipe[]

export const currentRecipeStore = create((set) => ({
  currentRecipe: {
    name: "start",
    prepTime: 1.5,
    cookTime: 12,
    ingredients: ["pasta", "beef"],
    instructions: ["cut", "cook", "eat"],
  },
  setCurrentRecipe: (recipe) => {
    set((state) => ({ currentRecipe: recipe }));
  },
}));
