import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./MyRecipes.module.scss";
import axios from "axios";
import { authStore } from "../../Store/_authStore";
import {
  currentRecipeStore,
  myRecipesStore,
  recipeToEditStore,
} from "../../Store/_store";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RecipeCard } from "../../Components/Recipe/RecipeCard";

export const MyRecipes = () => {
  const navigate = useNavigate();
  const { currentRecipe, setCurrentRecipe } = currentRecipeStore();
  const { recipeToEdit, setRecipeToEdit } = recipeToEditStore();
  const [userRecipes, setUserRecipes] = useState([]);
  const { userId, setUserId } = authStore();

  const fetchRecipesByUserId = (userId) => {
    axios({
      method: "get",
      url: `http://localhost:8080/api/v1/recipes/my-recipes/${userId}`,
    }).then((data) => setUserRecipes(data.data.recipes));
  };

  const fetchRecipe = (id) => {
    axios({
      method: "get",
      url: `http://localhost:8080/api/v1/recipes/${id}`,
    }).then((data) => setCurrentRecipe(data.data.recipe));
  };

  // const getRecipeDetails = (id) => {
  //   axios({
  //     method: "get",
  //     url: `http://localhost:8080/api/v1/recipes/${id}`,
  //   }).then((data) => setCurrentRecipe(data.data.recipe));
  // };

  const editRecipeHandler = async (e, id) => {
    e.stopPropagation();
    e.preventDefault();

    await axios({
      method: "get",
      url: `http://localhost:8080/api/v1/recipes/${id}`,
    }).then((data) => {
      setRecipeToEdit(data.data.recipe);
      // setRecipeToEdit((state) => ({
      //   ...state,
      //   id: e.id,
      // }));
      //setUserId({...state, id: e.id})
      //localStorage.setItem("recipeToedit", JSON.stringify(data.data.recipe));
      //console.log("recipeToedit!!: ", data.data.recipe);
    });

    navigate("./edit");
  };

  useEffect(() => {
    try {
      fetchRecipesByUserId(userId);
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  return (
    <div className={style["all-container"]}>
      <h2>MyCrazy recipes</h2>
      <div className={style["recipes-container"]}>
        {userRecipes &&
          userRecipes.map((recipe) => {
            const url = `http://localhost:3000/all/${recipe._id}`;
            const random = Math.random();
            return (
              <Link
                id={random}
                key={random}
                to={url}
                onClick={() => fetchRecipe(recipe._id)}
              >
                <RecipeCard
                  title={recipe.name}
                  id={recipe._id}
                  key={Math.floor(Math.random())}
                  //http://localhost:8080/uploads/Onion%20soup.jpg
                  src={`http://localhost:8080/${recipe.image}`}
                  prepTime={recipe.prepTime}
                  cookTime={recipe.CoockTime}
                  recipeHandler={(id) => console.log("id: ", id)}
                >
                  <button onClick={(e) => editRecipeHandler(e, recipe._id)}>
                    edit
                  </button>
                </RecipeCard>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
