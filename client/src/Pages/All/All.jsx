import style from "./all.module.scss";
import { recipesArr } from "../../TempData";
import { RecipeCard } from "../../Components/Recipe/RecipeCard";
import { Link } from "react-router-dom";
import { currentRecipeStore, recipesStore } from "../../Store/_store";
import { useEffect } from "react";
import axios from "axios";

// Todo - click and link to each recipe by id
// Feth all data from store - not each component individualy.

export const All = () => {
  const { recipes, setRecipes } = recipesStore();
  const { currentRecipe, setCurrentRecipe } = currentRecipeStore();

  const fetchRecipe = (id) => {
    axios({
      method: "get",
      url: `http://localhost:8080/api/v1/recipes/${id}`,
    }).then((data) => setCurrentRecipe(data.data.recipe));
  };

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
              <Link to={url} onClick={() => fetchRecipe(recipe._id)}>
                <RecipeCard
                  title={recipe.name}
                  id={recipe._id}
                  key={crypto.randomUUID()}
                  //http://localhost:8080/uploads/Onion%20soup.jpg
                  src={`http://localhost:8080/${recipe.image}`}
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
