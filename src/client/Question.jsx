import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { Button } from "./Button";

import { strCleaner } from "./utilities/StringHelpers";

export const Question = ({
  questionProp: { type, question, correct_answer, incorrect_answers },
  answerQuestion,
}) => {
  // if the question isn't of type "text",
  // then we can send all the answers to the form input
  const choices =
    type !== "text" ? [correct_answer, ...incorrect_answers] : null;

  // state holds user form input and value
  const [answer, setAnswer] = useState("");

  // reset answer and call our answerQuestion method
  const handleNext = (ans) => {
    answerQuestion(ans);
    setAnswer("");
  };

  // JSX
  const questionJsx = (
    <div style={questionStyles} className="question">
      <p style={{ fontSize: "1.5rem", margin: "0" }}>{strCleaner(question)}</p>
      <FormInput
        type={type}
        answer={answer}
        setAnswer={setAnswer}
        choices={choices}
      />
      <Button text={"Next"} action={() => handleNext(answer)} />
    </div>
  );

  return questionJsx;
};

// styles
const questionStyles = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "80%",
  margin: "auto",
};
