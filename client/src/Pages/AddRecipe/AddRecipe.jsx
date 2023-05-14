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

  const handler = (e) => {
    e.preventDefault();

    if (ingredientsRef.current.value !== "") {
      addIngredient(ingredientsRef.current.value);
      ingredientsRef.current.value = "";
    }
    console.log("No grediant to add");
  };

  const removeHandler = (id) => {
    const temp = ingredients.filter((element) => element.id !== id);
    console.log("temp ", temp);
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
            <button onClick={handler}>+</button>
            {/* <button onClick={removeHandler}>-</button> */}
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
          <ul>
            {ingredients.map((ingrediant) => (
              <AddItem
                printId={(id) => removeHandler(id)}
                id={Math.random()}
                element={ingrediant}
              />
            ))}
          </ul>
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
