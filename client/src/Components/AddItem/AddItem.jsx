import style from "./AddItem.module.scss";

export const AddItem = ({ element, id, passId }) => {
  const onClick = (id) => {
    passId(id);
  };

  return (
    <li id={id} className={style["add-item-container"]}>
      <p>{element}</p>
      <button onClick={() => onClick(id)} type="button">
        -
      </button>
    </li>
  );
};
