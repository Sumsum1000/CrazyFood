import style from "./tags.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  currentRecipeStore,
  recipesStore,
  selectedTagStore,
} from "../../Store/_store";
import { RecipeCard } from "../../Components/Recipe/RecipeCard";

export const Tags = () => {
  const { recipes, setRecipes } = recipesStore();
  const { selectedTag, setSelectedTag } = selectedTagStore();
  const [tagRecipeArr, setTagRecipeArr] = useState([]);
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
      url: `http://localhost:8080/api/v1/recipes/tag/${selectedTag}`,
    }).then((data) => setTagRecipeArr(data.data));
  }, []);

  useEffect(() => {
    console.log("currentRecipe? ", currentRecipe);
  }, [currentRecipe]);

  return (
    <div className={style["container"]}>
      <h2>{selectedTag}</h2>
      <div className={style["tags-container"]}>
        {tagRecipeArr.map((recipe) => {
          const url = `http://localhost:3000/all/${recipe._id}`;
          return (
            <Link to={url} onClick={() => fetchRecipe(recipe._id)}>
              <RecipeCard
                title={recipe.name}
                id={recipe._id}
                key={recipe._id}
                src={`http://localhost:8080/${recipe.image}`}
                // prepTime={recipe.prepTime}
                // cookTime={recipe.cookTime}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
