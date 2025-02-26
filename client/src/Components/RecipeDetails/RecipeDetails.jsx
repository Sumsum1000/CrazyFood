import { FC, useEffect, useState } from "react";
import style from "./RecipeDetails..module.scss";
import { currentRecipeStore } from "../../Store/_store";

export const RecipeDetails = () => {
  const { currentRecipe, setCurrentRecipe } = currentRecipeStore();

  console.log("currentRecipe ", currentRecipe);

  useEffect(() => {
    console.log("currentRecipe: ", currentRecipe);
  }, [currentRecipe]);

  return (
    <>
      <h2 className={style["details-title"]}>{currentRecipe.name}</h2>
      <div className={style["details-container"]}>
        <div className={style["left-container"]}>
          <div className={style["img-container"]}>
            <img src={`http://localhost:8080/${currentRecipe.image}`} />
          </div>
        </div>
        <div className={style["right-container"]}>
          <section>
            <p>{currentRecipe.description}</p>
          </section>
        </div>

        {/* Ingrediants section */}
        <section className={style["ingrediants-container"]}>
          <h3>Ingredients</h3>
          <ul>
            {currentRecipe ? (
              currentRecipe.ingredients.map((ingredient) => {
                const random = Math.random();
                return (
                  <li id={random} key={random}>
                    {ingredient}
                  </li>
                );
              })
            ) : (
              <h1>Wating</h1>
            )}
          </ul>

          {/* Instructions section */}
          <h3>Instructions</h3>
          <ul>
            {currentRecipe ? (
              currentRecipe.instructions.map((step) => {
                const random = Math.random();
                return (
                  <li id={random} key={random}>
                    {step}
                  </li>
                );
              })
            ) : (
              <h1>Wating</h1>
            )}
          </ul>
        </section>
      </div>
    </>
  );
};
