import React, { useState } from "react";
import Button from "../Button";

const Task2 = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Task 2</h1>
      <Button func={plus} text="INCREMENT" />
      <span style={{padding:"10px",
    fontSize:"22px"}}>{count}</span>
      <Button func={minus} text={"DECREMENT"} />
    </div>
  );
};

export default Task2;
