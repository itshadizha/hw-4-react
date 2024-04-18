import React, { useState } from "react";
import css from "./Task3.module.css";

const Task3 = () => {
  const [check, setCheck] = useState(false);

  return (
    <div
      className={`${css.wrapper} ${check ? css.active : css.nonActive}`}
    >
        <h1>Task 3</h1>
        <input onChange={() => setCheck(!check)} type="checkBox" />
    </div>
  );
};

export default Task3;

