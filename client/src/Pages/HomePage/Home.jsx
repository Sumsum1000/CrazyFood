import style from "./home.module.scss";
import { RecipeCard } from "../../Components/Recipe/RecipeCard";
import { FC, useEffect, useState } from "react";
import { recipesStore } from "../../Store/_store";
import { currentRecipeStore } from "../../Store/_store";
import axios from "axios";
import { Link } from "react-router-dom";

//import { Recipe } from "../../Store/types";
//import { RootState } from "../../Store/types";

export const Home = () => {
  const { recipes, setRecipes } = recipesStore();
  const { currentRecipe, setCurrentRecipe } = currentRecipeStore();
  const [currentTags, setCurrenTags] = useState({});
  const [tagsArr, setTagsArr] = useState([]);
  const [recipeStart, setRecipeStart] = useState([]);

  const fetchRecipeByID = (id) => {
    // axios({
    //   method: "get",
    //   url: `http://localhost:8080/api/v1/recipes/${id}`,
    // }).then((data) => setRecipes(data.data.recipes));
    console.log("id ", id);
  };

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

  // useEffect(() => {
  //   //console.log("recipes ", recipes);
  //   if (recipes !== null && recipes !== undefined) {
  //     recipes.forEach(async (element) => {
  //       for (const tag of element.tags) {
  //         await Promise.all([
  //           setCurrenTags((prevTags) => ({
  //             ...prevTags,
  //             [tag]: (prevTags[tag] || 0) + 1,
  //           })),
  //         ]);
  //       }
  //     });
  //   }
  // }, [recipes]);

  useEffect(() => {
    if (recipes !== null && recipes !== undefined) {
      for (let recipe of recipes) {
        for (let tag of recipe.tags) {
          setCurrenTags((prevTags) => ({
            ...prevTags,
            [tag]: (prevTags[tag] || 0) + 1,
          }));
        }
      }
    }

    // slice 6 recipes from all recipes for displaying on Home component
    const tempArr = recipes.slice(0, 6);
    setRecipeStart(tempArr);
  }, [recipes]);

  useEffect(() => {
    //console.log("current tags ", currentTags);
    const tempArr = Object.keys(currentTags).map((key) => ({
      tag: key,
      quantity: currentTags[key],
      id: Math.random(),
    }));
    //console.log("tempArr ", tempArr);
    setTagsArr(tempArr);
  }, [currentTags]);

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
            {tagsArr &&
              tagsArr.map((tag) => {
                return (
                  <li>
                    <p>
                      {tag.tag}({`${tag.quantity}`})
                    </p>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className={style["recipes-container"]}>
          {/* recipesOnStart */}
          {recipeStart.map((recipe) => {
            const url = `http://localhost:3000/all/${recipe._id}`;
            return (
              <Link to={url}>
                <RecipeCard
                  title={recipe.name}
                  id={recipe._id}
                  key={recipe._id}
                  prepTime={recipe.prepTime}
                  cookTime={recipe.cookTime}
                  recipeHandler={(id) => fetchRecipe(id)}
                />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

const arr = [
  { num: 1, tags: ["baking"] },
  { num: 2, tags: ["asian"] },
  { num: 3, tags: ["pasta", "chicken"] },
  { num: 4, tags: ["soups"] },
];
