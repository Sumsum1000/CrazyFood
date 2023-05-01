import style from "./all.module.scss";
import { recipesArr } from "../../TempData";
import { RecipeCard } from "../../Components/Recipe/RecipeCard";
import { Link } from "react-router-dom";
import { recipesStore } from "../../Store/_store";
import { useEffect } from "react";
import axios from "axios";

// Todo - click and link to each recipe by id
// Feth all data from store - not each component individualy.

export const All = () => {
  const { recipes, setRecipes } = recipesStore();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/recipes",
    }).then((data) => setRecipes(data.data.recipes));
  }, []);

  return (
    <div className={style["all-container"]}>
      <h2>CrazyFood recipes</h2>
      <div className={style["recipes-container"]}>
        {recipes &&
          recipes.map((recipe) => {
            const url = `http://localhost:3000/all/${recipe._id}`;
            return (
              <Link to={url}>
                <RecipeCard
                  title={recipe.name}
                  id={recipe._id}
                  key={Math.floor(Math.random())}
                  prepTime={recipe.prepTime}
                  cookTime={recipe.CoockTime}
                  recipeHandler={(id) => console.log("id: ", id)}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
