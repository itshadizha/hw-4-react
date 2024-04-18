import React, { useState } from "react";
import css from "./Task8.module.css"

const tasks = [
  { task: "Task 1", isCompleted: "NOT COMPLETED" },
  { task: "Task 2", isCompleted: "COMPLETED" },
  { task: "Task 3", isCompleted: "NOT COMPLETED" },
  { task: "Task 4", isCompleted: "COMPLETED" },
];

const Task8 = () => {
  const [filter, setFilter] = useState(null);

  return (
    <div>
      <h1>Task 8</h1>

      <button className={css.button} onClick={() => setFilter(null)}>ALL</button>
      <button className={css.button} onClick={() => setFilter("COMPLETED")}>COMPLETED</button>
      <button className={css.button} onClick={() => setFilter("NOT COMPLETED")}>NOT COMPLETED</button>

      {tasks.map((item, index) => {
        if (!filter || item.isCompleted === filter) {
          return (
            <h2 key={index}>
              {item.task} {item.isCompleted}
            </h2>
          );
        } 
      })}
    </div>
  );
};

export default Task8;
