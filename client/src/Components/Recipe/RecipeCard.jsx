import style from "./RecipeCard.module.scss";
import { recipesArr } from "../../TempData";
import { FC } from "react";
import { Link } from "react-router-dom";

// interface recipeType {
//   title: string;
//   id: string;
//   prepTime: string;
//   cookTime: string;
//   url: string;
//   recipeClickHandler?: () => void;
// }

export const RecipeCard = ({ title, id, prepTime, cookTime, onClick, src }) => {
  return (
    <div onClick={onClick} id={id} className={style["recipe-container"]}>
      <div className={style["recipe-img-container"]}>
        {/* recipesArr[0].img */}
        <img src={src} />
      </div>
      <section className={style["recipe-text-container"]}>
        <h1>{title}</h1>
        {/* <p>
          prep time: {prepTime} | cook time: {cookTime}
        </p> */}
      </section>
    </div>
  );
};
