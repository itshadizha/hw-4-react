import React from "react";
import Button from "../Button";
import { useState } from "react";

const Task1 = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };
  return (
    <div >
        <h1>Task 1</h1>
      <Button func={toggleState} text={state ? "close" : "open"} />
    </div>
  );
};  

export default Task1;
