import React, { useState } from "react";
import Button from "../Button";

const Task4 = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  return (
    <div>
        <h1>Task 4</h1>
      <Button func={toggleState} text={state ? "close" : "open"} />
      <h1 style={{ display: `${state ? "block" : "none"}` }}>Upps!</h1>
    </div>
  );
};

export default Task4;
