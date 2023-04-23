import style from "./all.module.scss";
import { recipesArr } from "../../TempData";
import { RecipeCard } from "../../Components/Recipe/RecipeCard";
import { Link } from "react-router-dom";

// Todo - click and link to each recipe by id

export const All = () => {
  return (
    <div className={style["all-container"]}>
      <h2>CrazyFood recipes</h2>
      <div className={style["recipes-container"]}>
        {recipesArr.map((recipe) => {
          const url = `http://localhost:3000/all/${recipe._id}`;
          return (
            <Link to={url}>
              <RecipeCard
                title={recipe.name}
                id={recipe.id}
                key={Math.floor(Math.random())}
                prepTime={recipe.prepTime}
                cookTime={recipe.CoockTime}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
