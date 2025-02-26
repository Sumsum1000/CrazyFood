import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import style from "./app.module.scss";

import { Home } from "./Pages/HomePage/Home";
import { SharedComponent } from "./Components/SharedComponent/SharedComponent";
//import { RecipeCard } from "./Components/Recipe/RecipeCard";
import { About } from "./Pages/About/About";
import { Tags } from "./Pages/Tags/Tags";
import { All } from "./Pages/All/All";
import { RecipeDetails } from "./Components/RecipeDetails/RecipeDetails";
import { Auth } from "./Pages/Auth/Auth";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";
import { Logout } from "./Pages/Logout/Logout";
import { MyRecipes } from "./Pages/MyRecipes/MyRecipes";
import EditRecipe from "./Pages/EditRecipe.js/EditRecipe";
import { authStore } from "./Store/_authStore";

function App() {

   const {
      setLogin,
      setUserId,
      setUserName,
      setToken,
    } = authStore();

  useEffect(() => { 
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    const userId = localStorage.getItem("userId");
    const email = localStorage.getItem("email");

    setToken(token);
    setLogin(true);
    setUserId(userId);
    setUserName(localStorage.getItem("userName"));
  }, []);

  return (
    <div className={style["container"]}>
      <div className={style["side-l"]} />
      <div className={style["main"]}>
        <Router>
          <Routes>
            <Route path="/" element={<SharedComponent />}>
              <Route index element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/about" element={<About />} />
              <Route path="/+" element={<AddRecipe />} />
              <Route path="/tags/:tag" element={<Tags />} />
              <Route path="/all" element={<All />} />
              <Route path="/my-recipes" element={<MyRecipes />} />
              <Route path="/my-recipes/edit" element={<EditRecipe />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/all/:id" element={<RecipeDetails />} />
            </Route>
          </Routes>
          ``
        </Router>
      </div>
      <div className={style["side-r"]} />
    </div>
  );
}

export default App;
