import { Recipe } from "../Models/Recipe.model.mjs";
import { User } from "../Models/User.model.mjs";
import mongoose from "mongoose";
//import { getUserByEmail } from "./user.controller.mjs";

// Move to router
const getUserById = async (userId) => {
  try {
    const user = await User.findOne({ userId: userId });
    return user;
  } catch (error) {
    throw error;
  }
};

export const createRecipe = async (req, res) => {
  const { userId } = req.params;
  // id was x
  try {
    const user = await getUserById(userId);
    const id = new mongoose.Types.ObjectId(user.id);

    const recipe = await Recipe.create({ ...req.body, userId: id });
    res.status(201).json({ recipe });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// get all recipes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json({ recipes }); //{recipes}
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// get all recipes BY USER id
export const getAllRecipesByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const recipes = await Recipe.find({ userId: userId });
    res.status(200).json({ recipes });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// get single recipe
export const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findOne({ _id: id });
    res.status(200).json({ recipe });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// update recipe
export const updateRecipe = async (req, res) => {
  try {
    const id = req.params.id;
    const recipe = await Recipe.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ recipe });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// delete recipe
export const deleteRecipe = async (req, res) => {
  try {
    const id = req.params.id;
    const recipe = await Recipe.findByIdAndDelete({ _id: id });
    if (!recipe) {
      res.status(404).json({ msg: `no recipe with ID: ${id}` });
    }
    res.status(200).json({ msg: recipe });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// get recipe by tag
export const getRecipesByTag = async (req, res) => {
  try {
    const selectedTag = req.params.tag;
    const recipes = await Recipe.find({ tags: selectedTag });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const uploadImage = async (req, res) => {
  await res.status(201).json("Uploaded");
};
