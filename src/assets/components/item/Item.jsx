import React, { useState } from 'react';
import css from './Item.module.css';

const Item = ({ onClick, text }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onClick(); 
  };

  return (
    <button
      className={`item ${selected ? `${css.selected} ${css.item}` : css.item}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Item;

