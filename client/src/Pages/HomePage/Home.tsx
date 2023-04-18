import style from "./home.module.scss";
import { RecipeCard } from "../../Components/Recipe/RecipeCard";
import { FC } from "react";
import { recipesArr } from "../../TempData";

export const Home: FC = () => {
  const recipesOnStart = recipesArr.slice(0, 6);

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
          {recipesOnStart.map((recipe) => {
            return (
              <RecipeCard
                title={recipe.name}
                id={recipe.id}
                url={`all/${recipe.id}`}
                key={Math.floor(Math.random())}
                prepTime={recipe.prepTime}
                cookTime={recipe.CoockTime}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
