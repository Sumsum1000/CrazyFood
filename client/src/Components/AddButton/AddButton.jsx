import style from "./AddButton.module.scss";

export const AddButton = ({ label, onClick }) => {
  return (
    <div id={style["add-item-container"]}>
      <button type="button" onClick={onClick}>
        +
      </button>
      <label htmlFor="ingredients">{label}</label>
    </div>
  );
};
