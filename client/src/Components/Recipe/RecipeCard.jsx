import style from "./RecipeCard.module.scss";
import { recipesArr } from "../../TempData";
import { Link } from "react-router-dom";

export const RecipeCard = ({
  title,
  id,
  prepTime,
  cookTime,
  onClick,
  src,
  children,
}) => {
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
      {children}
    </div>
  );
};
