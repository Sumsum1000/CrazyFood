import { useEffect, useRef, useState } from "react";
import style from "./AddRecipe.module.scss";
import { AddItem } from "../../Components/AddItem/AddItem";
import { addIngredientsStore } from "../../Store/_addIngredientsStore";

const AddRecipe = () => {
  const nameRef = useRef();
  const descriptioneRef = useRef();
  const ingredientsRef = useRef();
  const instructionsRef = useRef();

  const { ingredients, addIngredient, removeIngredient } =
    addIngredientsStore();
  const [tempIngredient, setTempIngredient] = useState("");

  const addHandler = (e) => {
    e.preventDefault();

    if (ingredientsRef.current.value !== "") {
      addIngredient({ id: Math.random(), name: ingredientsRef.current.value });
      ingredientsRef.current.value = "";
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

  useEffect(() => {
    console.log("ingredients ", ingredients);
  }, [ingredients]);

  return (
    <div className={style["add-container"]}>
      <h3>Add recipe</h3>
      <form>
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
          <div id={style["add-item-container"]}>
            <button onClick={addHandler}>+</button>
            <label htmlFor="ingredients">ingre</label>
          </div>

          <input
            id="ingredients"
            type="text"
            name="ingredients"
            placeholder="Recipe ingredients"
            ref={ingredientsRef}
            onChange={() => setTempIngredient(ingredientsRef.current.value)}
          />

          {/* <AddItem /> */}
          <ol>
            {ingredients.map((ingrediant) => (
              <li>
                <AddItem
                  id={ingrediant.id}
                  //printId={(id) => console.log("id ", id)}
                  passId={(id) => removeHandler(ingrediant.id)}
                  element={ingrediant.name}
                />
              </li>
            ))}
          </ol>
        </div>

        <div>
          <label htmlFor="instructions">instructions</label>
          <input
            id="instructions"
            type="text"
            name="instructions"
            placeholder="Recipe instructions"
            ref={instructionsRef}
          />
        </div>
      </form>
    </div>
  );
};
export default AddRecipe;
