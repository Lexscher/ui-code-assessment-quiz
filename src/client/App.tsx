import * as React from "react";
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

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Lucid</h1>
      <h2>Welcome to UI Team code assessment!</h2>
    </div>
  );
};
