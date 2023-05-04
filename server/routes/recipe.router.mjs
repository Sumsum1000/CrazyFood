import express from "express";

export const RecipeRouter = express.Router();

import {
  createRecipe,
  getAllRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
  getRecipesByTag,
} from "../Controllers/recipeController.mjs";
import { get } from "mongoose";

RecipeRouter.post("/", (req, res) => {
  createRecipe(req, res);
});

// get all recipes
RecipeRouter.get("/", (req, res) => {
  getAllRecipes(req, res);
});

// get single recipe
RecipeRouter.get("/:id", (req, res) => {
  getRecipe(req, res);
});

// edit recipe
RecipeRouter.patch("/:id", (req, res) => {
  updateRecipe(req, res);
});

// delete recipe
RecipeRouter.delete("/:id", (req, res) => {
  deleteRecipe(req, res);
});

// get recipes by tag
RecipeRouter.get("/tag/:tag", (req, res) => {
  getRecipesByTag(req, res);
});
