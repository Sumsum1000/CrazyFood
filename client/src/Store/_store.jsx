import { create } from "zustand";
//import { Recipe, RootState } from "./types";

export const recipesStore = create((set) => ({
  recipes: [
    {
      name: "start",
      prepTime: 1.5,
      cookTime: 12,
      tags: "",
      ingredients: ["pasta", "beef"],
      instructions: ["cut", "cook", "eat"],
    },
  ],
  setRecipes: (existRecipes) => set((state) => ({ recipes: existRecipes })),
})); //as Recipe[]

export const currentRecipeStore = create((set) => ({
  currentRecipe: {
    name: "start",
    // prepTime: 1.5,
    // cookTime: 12,
    description: "details...",
    tags: "tag",
    ingredients: ["pasta", "beef"],
    instructions: ["cut", "cook", "eat"],
  },
  setCurrentRecipe: (recipe) => {
    set((state) => ({ currentRecipe: recipe }));
  },
}));

export const selectedTagStore = create((set) => ({
  selectedTag: {
    tag: "",
  },
  setSelectedTag: (tag) => {
    set((state) => ({ selectedTag: tag }));
  },
}));

export const myRecipesStore = create((set) => ({
  myRecipes: [{ name: "my name" }],
  setMyRecipes: (recipes) => {
    set(() => ({ ingredients: recipes }));
  },
}));

export const recipeToEditStore = create((set) => ({
  recipeToEdit: {
    id: "",
    name: "Asaf",
    description: "",
    tags: [],
    ingredients: [],
    instructions: [],
  },
  setRecipeToEdit: (recipe) => {
    //set((state) => ({ recipeToEdit: recipe }));
    set({ recipeToEdit: recipe });
  },
  addIngredientEdit: (ingredient) => {
    set((state) => ({
      recipeToEdit: {
        ...state.recipeToEdit,
        ingredients: [...state.recipeToEdit.ingredients, ingredient],
      },
    }));
  },
  removeIngredientEdit: (updatedIngredients) => {
    set((state) => ({
      recipeToEdit: {
        ...state.recipeToEdit,
        ingredients: updatedIngredients,
      },
    }));
  },
  addInstructionEdit: (instruction) => {
    set((state) => ({
      recipeToEdit: {
        ...state.recipeToEdit,
        instructions: [...state.recipeToEdit.instructions, instruction],
      },
    }));
  },
  removeInstructionEdit: (updatedInstructions) => {
    set((state) => ({
      recipeToEdit: {
        ...state.recipeToEdit,
        instructions: updatedInstructions,
      },
    }));
  },
}));
