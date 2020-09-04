import * as React from "react";
import { Button } from "./Button";
import { handleError } from "./utilities/HandleError";
const { useState, useEffect } = React;

export const App = () => {
  const questionsApiUrl: string = "http://localhost:4000/api/questions";

  // state stores questions and manages the pages
  const [questions, setQuestions] = useState([]);
  const [quizMode, toggleQuizMode] = useState(false);

  // api handling
  const getQuestions: Array<object> | any = async () => {
    try {
      const res = await fetch(questionsApiUrl);
      const questionsJson = await res.json();
      setQuestions(questionsJson.results);
    } catch (err) {
      return handleError(err);
    }
  };

  useEffect(() => {
    getQuestions();
  }, [questions]);

  // JSX
  const welcomeTsx = (
    <>
      <h1>Hello!</h1>
      <h2 style={{color: "#000"}}>Welcome to the Fantastic Lucid Quiz!</h2>
      <p>
        <i>
          Answer trivia questions from a large diverse pool. <br />
          See your score at the end of the quiz.
        </i>
      </p>
      <Button text="begin" action={() => toggleQuizMode(true)} />
    </>
  );
  const quizJsx = <div>Quiz</div>;

  const appJsx = <div style={appStyles}>{quizMode ? quizJsx : welcomeTsx}</div>;

  return appJsx;
};

const appStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", 
  fontFamily: "sans-serif",
  color: "#3d4045",
};
