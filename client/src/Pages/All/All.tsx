import style from "./all.module.scss";
import { recipesArr } from "../../TempData";
import { RecipeCard } from "../../Components/Recipe/RecipeCard";

export const All = () => {
  return (
    <div className={style["all-container"]}>
      <h2>CrazyFood recipes</h2>
      <div className={style["recipes-container"]}>
        {recipesArr.map((recipe) => {
          return (
            <RecipeCard
              title={recipe.name}
              id={recipe.id}
              url={`/all/${recipe.id}`}
              key={Math.floor(Math.random())}
              prepTime={recipe.prepTime}
              cookTime={recipe.CoockTime}
            />
          );
        })}
      </div>
    </div>
  );
};
