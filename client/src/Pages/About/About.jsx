import style from "./About.module.scss";
import { FC } from "react";
import { aboutContent } from "../../Components/Data";

export const About = () => {
  return (
    <div className={style["about-container"]}>
      <h1 className={style["title"]}>Wecome to crazyFood</h1>
      {aboutContent.map((p) => (
        <p>{p}</p>
      ))}
    </div>
  );
};
