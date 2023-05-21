import express from "express";

export const recipeRouter = express.Router();

import {
  createRecipe,
  getAllRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
  getRecipesByTag,
} from "../Controllers/recipe.controller.mjs";
import { uploadRecipeImage } from "../Controllers/upload.controller.mjs";

recipeRouter.post("/", (req, res) => {
  createRecipe(req, res);
});

// get all recipes
recipeRouter.get("/", (req, res) => {
  getAllRecipes(req, res);
});

// get single recipe
recipeRouter.get("/:id", (req, res) => {
  getRecipe(req, res);
});

// edit recipe
recipeRouter.patch("/:id", (req, res) => {
  updateRecipe(req, res);
});

// delete recipe
recipeRouter.delete("/:id", (req, res) => {
  deleteRecipe(req, res);
});

// get recipes by tag
recipeRouter.get("/tag/:tag", (req, res) => {
  getRecipesByTag(req, res);
});

recipeRouter.post("/uploads", (req, res) => {
  uploadRecipeImage(req, res);
});
