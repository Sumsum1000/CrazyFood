import { FC, useEffect, useState } from "react";
import style from "./RecipeDetails..module.scss";
import { useParams } from "react-router-dom";
import { recipesArr } from "../../TempData";
import { recipesStore } from "../../Store/_store";
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
        {/* <h1>ID: {coctailId}</h1> */}
        <div className={style["left-container"]}>
          <div className={style["img-container"]}>
            <img src={recipesArr[0].img} />
          </div>
        </div>
        <div className={style["right-container"]}>
          <section>
            <p>{currentRecipe.description}</p>
          </section>
        </div>

        {/* Ingrediants section */}
        <section className={style["ingrediants-container"]}>
          <h3>Ingradients</h3>
          <ul>
            {currentRecipe ? (
              currentRecipe.ingradients.map((ingredient) => {
                return <li>{ingredient}</li>;
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
                return <li>{step}</li>;
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
