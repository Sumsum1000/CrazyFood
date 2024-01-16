import { useEffect, useRef, useState } from "react";
import axios from "axios";
import style from "./AddRecipe.module.scss";
import { AddItem } from "../../Components/AddItem/AddItem";
import { ingredientsStore } from "../../Store/_ingredientsStore";
import { instructionsStore } from "../../Store/_instructionsStore";
import { AddInput } from "../../Components/AddInput/AddInput";
import {
  removeItem,
  addItem,
  resetRecipe,
  checkboxHandler,
} from "./RecipeUtils";

const AddRecipe = () => {
  const BASE_URL = "http://localhost:8080/api/v1";
  const tagsNames = [
    "Beef",
    "Chicken",
    "Soups",
    "Asian",
    "Italian",
    "Salads",
    "vegetarian",
    "Baking",
    "Other",
  ];

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
  //const [imageValue, setImageValue] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", selectedImage);
      const {
        data: {
          image: { src },
        },
      } = await axios.post(`${BASE_URL}/recipes/uploads`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("src: ", src);
      //setImageValue(src);

      //setImageValue(null);

      const newRecipe = {
        name: nameRef.current.value,
        description: descriptioneRef.current.value,
        prepTime: 14,
        cookTime: 15,
        ingredients: ingredients,
        instructions: instructions,
        tags: tags,
        image: src,
      };

      postRecipe(newRecipe);
      resetRecipe(
        nameRef,
        descriptioneRef,
        resetIngredients,
        resetInstructions
      );
    } catch (error) {
      console.error(error);
      //return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
  };

  const postRecipe = async (newRecipe) => {
    console.log("post newRecipe ", newRecipe);
    try {
      axios
        .post(`${BASE_URL}/recipes`, newRecipe)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  useEffect(() => {
    console.log("selected file ", selectedImage);
  }, [selectedImage]);

  return (
    <div className={style["add-container"]}>
      <h3>Add recipe</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Recipe</label>
          <input
            id="name"
            type="text"
            name="name"
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
            placeholder="Recipe description"
            ref={descriptioneRef}
          />
        </div>

        <div>
          {/* Ingredients */}
          <AddInput
            ref={ingredientsRef}
            onClick={() => addItem(ingredientsRef, addIngredient)}
            label={"ingredients"}
            placeholder={"new ingredient"}
          />

          <ol>
            {ingredients.map((ingrediant) => (
              <li>
                <AddItem
                  id={ingrediant}
                  passId={
                    (id) =>
                      removeItem(ingrediant, ingredients, removeIngredient)
                    //console.log("id ", id)
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
            onClick={() => addItem(instructionsRef, addInstruction)}
            label={"instructions"}
            placeholder={"new instrcution"}
          />
          <ol>
            {instructions.map((instruction) => (
              <li>
                <AddItem
                  id={instruction.id}
                  passId={() =>
                    removeItem(instruction, instructions, removeInstructions)
                  }
                  element={instruction}
                />
              </li>
            ))}
          </ol>
        </div>
        <fieldset>
          <legend>Please add a relevat tag</legend>
          {tagsNames.map((tagName) => (
            <div id={tagName} key={tagName}>
              <input
                onChange={(e) => checkboxHandler(e, tags, setTags)}
                type="checkbox"
                value={tagName}
              />
              <label htmlFor={tagName}>{tagName}</label>
              <br />
            </div>
          ))}
        </fieldset>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
        />

        <input type="submit" />
      </form>
    </div>
  );
};
export default AddRecipe;
