import { useEffect, useRef, useState } from "react";
import axios from "axios";
import style from "./EditRecipe.module.scss";
import { AddItem } from "../../Components/AddItem/AddItem";
import { ingredientsStore } from "../../Store/_ingredientsStore";
import { instructionsStore } from "../../Store/_instructionsStore";
import { recipeToEditStore } from "../../Store/_store";

import { AddInput } from "../../Components/AddInput/AddInput";
import { useNavigate } from "react-router-dom";
import {
  removeItem,
  addItem,
  resetRecipe,
  checkboxHandler,
} from "../AddRecipe/RecipeUtils";
//import { AddItem } from "../../Pages/AddRecipe/RecipeUtils";
//const { recipeToEdit, setRecipeToEdit } = recipeToEditStore();

const EditRecipe = () => {
  const BASE_URL = "http://localhost:8080/api/v1";
  const tagsNames = [
    "Chicken",
    "Soups",
    "Asian",
    "Italian",
    "Salads",
    "vegetarian",
    "Baking",
    "Other",
  ];

  const navigate = useNavigate();
  const {
    recipeToEdit,
    setRecipeToEdit,
    addIngredientEdit,
    removeIngredientEdit,
    addInstructionEdit,
    removeInstructionEdit,
  } = recipeToEditStore();
  const [isLoading, setIsLoading] = useState(true);
  const nameRef = useRef();
  const descriptioneRef = useRef();
  const ingredientsRef = useRef();
  const instructionsRef = useRef();
  const prepTimeRef = useRef();

  const { ingredients, addIngredient, removeIngredient, resetIngredients } =
    ingredientsStore();
  const {
    instructions,
    addInstruction,
    removeInstructions,
    resetInstructions,
  } = instructionsStore();

  const [tags, setTags] = useState([]);
  const [selectedImage, setSelectedImage] = useState();

  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [tagToEdit, setTagToEdit] = useState("");
  const [ingredientsToEdit, setIngredientsToEdit] = useState([]);
  const [update, setUpdate] = useState(null);

  const test = async () => {
    try {
      let imageUrl; // Variable to hold the image URL

      // Check if a new image is selected
      if (selectedImage) {
        // Upload the new image
        const formData = new FormData();
        formData.append("image", selectedImage);
        const response = await axios.post(
          `${BASE_URL}/recipes/uploads`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        imageUrl = response.data.image.src;
      } else {
        // If no new image is selected, use the existing image URL
        imageUrl = recipeToEdit.image;
      }

      // Create the new recipe object
      const newRecipe = {
        name: nameRef.current.value,
        description: descriptioneRef.current.value,
        prepTime: 14,
        cookTime: 15,
        ingredients: [...ingredientsToEdit],
        instructions: instructions,
        tags: tags,
        image: imageUrl, // Use the image URL
        _id: recipeToEdit._id,
      };

      // Update the recipe on the backend
      const response = await axios.patch(
        `${BASE_URL}/recipes/${recipeToEdit._id}`,
        newRecipe
      );
      console.log("Updated recipe:", response.data);

      // Navigate to the My Recipes page
      navigate(`/my-recipes`);
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    console.log("file: ", file);
  };

  // Stop loading if recipeToEdit
  useEffect(() => {
    console.log("recipeToEdit: ", recipeToEdit);
    const x = recipeToEdit.image;
    setSelectedImage(x);
    setIsLoading(false);
  }, [recipeToEdit]);

  useEffect(() => {
    console.log("Hello: ", recipeToEdit);
  }, [recipeToEdit]);

  useEffect(() => {
    setSelectedImage();
  }, []);

  return (
    <div className={style["add-container"]}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h3>Edit recipe</h3>
          <button onClick={test}>handler</button>
          {/*  <form onSubmit={submitHandler}> */}
          <form>
            <div>
              <label htmlFor="name">Recipe</label>
              <input
                id="name"
                type="text"
                name="name"
                defaultValue={recipeToEdit.name}
                placeholder="Recipe name"
                ref={nameRef}
              />
            </div>

            <div>
              <label htmlFor="description">description</label>
              <textarea
                id="description"
                type="text"
                name="description"
                defaultValue={recipeToEdit.description}
                placeholder="Recipe description"
                ref={descriptioneRef}
              />
            </div>

            <div>
              {/* Ingredients */}
              <AddInput
                ref={ingredientsRef}
                onClick={() => addItem(ingredientsRef, addIngredientEdit)}
                label={"ingredients"}
                placeholder={"new ingredient"}
              />

              <ol key={crypto.randomUUID()}>
                {recipeToEdit.ingredients.map((ingrediant) => (
                  <li key={crypto.randomUUID()}>
                    {/* TODO - change AddItem to item */}
                    <AddItem
                      id={ingrediant.id}
                      passId={(id) =>
                        removeItem(
                          ingrediant,
                          recipeToEdit.ingredients,
                          removeIngredientEdit
                        )
                      }
                      element={ingrediant}
                    />
                  </li>
                ))}
              </ol>
            </div>

            <div>
              {/* Instructions */}
              <AddInput
                ref={instructionsRef}
                onClick={() => addItem(instructionsRef, addInstructionEdit)}
                label={"instructions"}
                placeholder={"new instrcution"}
              />
              <ul>
                {recipeToEdit.instructions.map((instruction) => (
                  <li>
                    <div>
                      <AddItem
                        id={instruction.id}
                        passId={() =>
                          removeItem(
                            instruction,
                            instructions,
                            removeInstructions
                          )
                        }
                        element={instruction}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <fieldset>
              {/* Tag */}
              <p>Please add a relevat tag</p>
              {tagsNames.map((tagName) => {
                let tempChecked = false;
                tagName === recipeToEdit.tags[0] ? (tempChecked = true) : "";
                return (
                  <div id={crypto.randomUUID()} key={crypto.randomUUID()}>
                    <input
                      onChange={(e) => checkboxHandler(e, tags, setTags)}
                      type="checkbox"
                      //checked={tempChecked}
                      value={tagName}
                    />
                    <label htmlFor={tagName}>{tagName}</label>
                    {/* <br /> */}
                  </div>
                );
              })}
            </fieldset>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id={crypto.randomUUID()}
              key={crypto.randomUUID()}
              accept="image/*"
              onChange={handleFileChange}
            />
            <input type="submit" />
          </form>
        </>
      )}
    </div>
  );
};
export default EditRecipe;
