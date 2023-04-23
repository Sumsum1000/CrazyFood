export type Recipe = {
  name: string;
  prepTime: number;
  cookTime: number;
  ingredients: string[];
  instructions: string[];
  id: string;
};

export type RootState = {
  recipes: Recipe[];
};
