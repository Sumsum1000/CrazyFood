import style from "./home.module.scss";
import { RecipeCard } from "../../Components/Recipe/RecipeCard";
import { FC, useEffect } from "react";
import { recipesArr } from "../../TempData";
import { recipesStore } from "../../Store/_store";
import { currentRecipeStore } from "../../Store/_store";
import axios from "axios";
import { Link } from "react-router-dom";

//import { Recipe } from "../../Store/types";
//import { RootState } from "../../Store/types";

export const Home = () => {
  const recipesOnStart = recipesArr.slice(0, 6);

  const { recipes, setRecipes } = recipesStore();
  const { currentRecipe, setCurrentRecipe } = currentRecipeStore();

  const fetchRecipeByID = (id) => {
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

  useEffect(() => {
    console.log("current: ", currentRecipe);
  }, [currentRecipe]);

  return (
    <div className={style["home-container"]}>
      {/* {<img src={mainImg} />} */}
      <header>
        <h1>CrazyFood</h1>
        <p>Only Great food no #@%&%</p>
      </header>
      <section className={style["bottom-container"]}>
        <div className={style["left"]}>
          <h1>Recipes</h1>
          <ul>
            <li>
              <p>Beef(4)</p>
            </li>
            <li>
              <p>Breakfast(2)</p>
            </li>
            <li>
              <p>Chicken(5)</p>
            </li>
            <li>
              <p>Pasta(4)</p>
            </li>
            <li>
              <p>Soups(1)</p>
            </li>
          </ul>
        </div>

        <div className={style["recipes-container"]}>
          {/* recipesOnStart */}
          {recipes.map((recipe) => {
            const url = `http://localhost:3000/all/${recipe._id}`;
            return (
              <Link to={url}>
                <RecipeCard
                  title={recipe.name}
                  id={recipe._id}
                  key={recipe._id}
                  prepTime={recipe.prepTime}
                  cookTime={recipe.cookTime}
                  recipeHandler={(id) => fetchRecipeByID(id)}
                />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};
