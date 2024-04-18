import React, { useState } from 'react';
import css from "./Task7.module.css";
import Item from "../item/Item"

const items = [
  { item: "item 1" },
  { item: "item 2" },
  { item: "item 3" },
  { item: "item 4" },
  { item: "item 5" },
];

const Task7 = () => {
  const [selectedItem, setItem] = useState(null);

  const handleItemClick = (item) => {
    setItem(item);
  };

  return (
    <div>
      <h1>Task 7</h1>
      {items.map((item, index) => (
        <Item
          key={index}
          onClick={() => handleItemClick(item.item)}
          text={item.item}
          selected={selectedItem === item.item}
        />
      ))}
      <h1>You selected: {selectedItem}</h1>
    </div>
  );
};

export default Task7;
