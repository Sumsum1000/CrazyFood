import style from "./RecipeCard.module.scss";
import { recipesArr } from "../../TempData";
import { FC } from "react";
import { Link } from "react-router-dom";

interface recipeType {
  title: string;
  id: string;
  prepTime: string;
  cookTime: string;
  url: string;
  recipeClickHandler?: () => void;
}

export const RecipeCard: FC<recipeType> = ({
  title,
  id,
  prepTime,
  cookTime,
  url,
  recipeClickHandler,
}: recipeType) => {
  const recipeHandler = (id: string): void => {
    console.log("Handler: ", id);
  };

  return (
    <Link to={url}>
      <div
        id={id}
        onClick={() => recipeHandler(id)}
        className={style["recipe-container"]}
      >
        <div className={style["recipe-img-container"]}>
          <img src={recipesArr[0].img} />
        </div>
        <section className={style["recipe-text-container"]}>
          <h1>{title}</h1>
          <p>
            prep time: {prepTime} | cook time: {cookTime}
          </p>
        </section>
      </div>
    </Link>
  );
};
