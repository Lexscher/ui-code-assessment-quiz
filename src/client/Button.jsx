import React from "react";

export const Button = ({ action, text }) => (
  <button style={btnStyles} onClick={action}>
    {text}
  </button>
);

const btnStyles = {
  backgroundColor: "#206fdb",
  border: "none",
  color: "white",
  padding: "0.9375rem 2rem",
  cursor: "pointer",
  maxWidth: "110px",
};
