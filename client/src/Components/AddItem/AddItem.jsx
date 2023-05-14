import style from "./AddItem.module.scss";

export const AddItem = ({ element, id, printId }) => {
  const clickHandler = (id) => {
    //removeHandler(id);
    //removeIngredient(id);
    printId(id);
  };

  return (
    <li id={id} className={style["add-item-container"]}>
      <p>{element}</p>
      <button onClick={() => printId(id)}>-</button>
    </li>
  );
};
