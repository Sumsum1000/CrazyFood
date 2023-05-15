import React from "react";
import style from "./AddInput.module.scss";

export const AddInput = React.forwardRef(
  ({ label, id, name, placeholder, ref, onChange, onClick }, refff) => {
    return (
      <div>
        <div id={style["add-item-container"]}>
          <button type="button" onClick={onClick}>
            +
          </button>
          <label htmlFor="ingredients">{label}</label>
        </div>

        <input
          id={id}
          type="text"
          name={name}
          placeholder={placeholder}
          ref={refff}
          onChange={onChange}
        />
      </div>
    );
  }
);
