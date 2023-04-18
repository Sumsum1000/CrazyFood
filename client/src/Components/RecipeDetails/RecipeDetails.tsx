import { FC, useEffect, useState } from "react";
import style from "./RecipeDetails..module.scss";
import { useParams } from "react-router-dom";

export const RecipeDetails: FC = () => {
  const { id } = useParams();
  const [coctailId, setCoctailId] = useState("");

  useEffect(() => {
    id ? setCoctailId(id) : null;
  }, [id]);

  return (
    <div className={style["details-container"]}>
      <h1>ID: {coctailId}</h1>
    </div>
  );
};
