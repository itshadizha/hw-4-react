import React, { useState } from "react";
import Button from "../Button";
import css from "./Task5.module.css";

const Task5 = () => {
  const [spin, setSpin] = useState(false);

  const showSpinner = () => {
    setSpin(!spin);
  };

  return (
    <div>
        <h1>Task 5</h1>
      <Button func={showSpinner} text={spin ? "stop" : "start"} />
      <span style={{ display: spin ? "block" : "none" }} className={css.loader}></span>
    </div>
  );
};

export default Task5;

