import React from "react";

export const FormInput = ({ type, answer, setAnswer, choices }) => {
  // helper takes a choice and creates an option tag
  const makeRadio = (str) => (
    <label style={{ padding: ".5rem 0" }} key={str}>
      <input
        type="radio"
        value={str}
        style={{cursor: "pointer"}}
        checked={answer === str}
        onChange={({ target }) => setAnswer(target.value)}
      />
      {str}
    </label>
  );

  // map over choices to create radio options
  const optionsArr = choices && choices.map(makeRadio);

  // text input
  const textInputJsx = (
    <input
      style={textInputStyles}
      value={answer}
      onChange={({ target }) => setAnswer(target.value)}
    />
  );

  // options input
  const optionsInputJsx = (
    <div className="radio" style={radioStyles}>
      {optionsArr}
    </div>
  );

  const inputJsx = type === "text" ? textInputJsx : optionsInputJsx;

  return inputJsx;
};

// styles
const textInputStyles = {
  padding: "12px 20px",
  width: "60%",
  margin: ".5rem 0",
};

const radioStyles = {
  display: "flex",
  flexDirection: "column",
  margin: ".5rem 0",
};
