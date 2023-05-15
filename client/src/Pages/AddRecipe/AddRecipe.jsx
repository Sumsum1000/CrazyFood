import { useEffect, useRef, useState } from "react";
import style from "./AddRecipe.module.scss";
import { AddItem } from "../../Components/AddItem/AddItem";
import { ingredientsStore } from "../../Store/_ingredientsStore";
import { instructionsStore } from "../../Store/_instructionsStore";
import { AddInput } from "../../Components/AddInput/AddInput";

const AddRecipe = () => {
  const nameRef = useRef();
  const descriptioneRef = useRef();
  const ingredientsRef = useRef();
  const instructionsRef = useRef();

  const { ingredients, addIngredient, removeIngredient, resetIngredients } =
    ingredientsStore();
  const {
    instructions,
    addInstruction,
    removeInstructions,
    resetInstructions,
  } = instructionsStore();
  //const [tempIngredient, setTempIngredient] = useState("");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");

  const addHandler1 = (r, ref) => {
    if (ref.current.value !== "") {
      addIngredient({
        id: Math.random(),
        name: ref.current.value,
      });
      ref.current.value = "";
      console.log("Gredient added");
    } else {
      console.log("No grediant to add");
    }
  };

  const addHandler2 = (r, ref) => {
    if (ref.current.value !== "") {
      addInstruction({
        id: Math.random(),
        name: ref.current.value,
      });
      ref.current.value = "";
      console.log("Gredient added");
    } else {
      console.log("No grediant to add");
    }
  };

  const removeHandler = (id) => {
    let temp;
    for (let element of ingredients) {
      if (element.id === id) {
        temp = element;
      }
    }
    const updatedList = ingredients.filter(
      (element) => element.name != temp.name
    );
    removeIngredient(updatedList);
  };

  const removeInstrucionsHandler = (id) => {
    let temp;
    for (let element of instructions) {
      if (element.id === id) {
        temp = element;
      }
    }
    const updatedList = instructions.filter(
      (element) => element.name != temp.name
    );
    removeInstructions(updatedList);
  };

  const resetRecipe = () => {
    nameRef.current.value = "";
    descriptioneRef.current.value = "";
    resetIngredients();
    resetInstructions();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: nameRef.current.value,
      description: descriptioneRef.current.value,
      ingredients: ingredients,
      instructions: instructions,
    };

    console.log("newRecipe ", newRecipe);
    resetRecipe();
  };

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
            onChange={() => setR1(ingredientsRef.current.value)}
            onClick={() => addHandler1(r1, ingredientsRef)}
            label={"ingredients"}
            placeholder={"new ingredient"}
          />

          <ol>
            {ingredients.map((ingrediant) => (
              <li>
                <AddItem
                  id={ingrediant.id}
                  passId={(id) => removeHandler(ingrediant.id)}
                  element={ingrediant.name}
                />
              </li>
            ))}
          </ol>
        </div>

        <div>
          {/* Instructions */}
          <AddInput
            ref={instructionsRef}
            onChange={() => setR2(instructionsRef.current.value)}
            onClick={() => addHandler2(r2, instructionsRef)}
            label={"instructions"}
            placeholder={"new instrcution"}
          />
          <ol>
            {instructions.map((instruction) => (
              <li>
                <AddItem
                  id={instruction.id}
                  passId={(id) => removeInstrucionsHandler(instruction.id)}
                  element={instruction.name}
                />
              </li>
            ))}
          </ol>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
export default AddRecipe;
