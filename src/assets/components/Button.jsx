import React from "react";

const Button = ({ text, func }) => {
  return (
    <button onClick={func}
      style={{
        fontSize:"22px",
        width:"200px",
        height:"50px",
        borderRadius: "10px",
        backgroundColor: "palevioletred",
        padding: "10px",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
