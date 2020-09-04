import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Question } from "./Question";
import { Results } from "./Results";

// started making utilities to save space
import { randomThree } from "./utilities/RandomHelpers";
import { equalStrings } from "./utilities/StringHelpers";

// this will either render a question, or the results page
export const Quiz = ({ questions }) => {
  // handle what page we show
  const [showResults, toggleShowResults] = useState(false);
  // hold three random questions from questions array
  const [currentQuestions, getCurrentQuestions] = useState([]);
  const [currentQsLoaded, setCurrentQsLoaded] = useState(false);
  // track what question the user is on
  const [currentQIndex, setCurrentQIndex] = useState(0);
  // data to be passed into the results page
  const [correct, updateCorrect] = useState(0);
  const [answered, updateAnswered] = useState(0);

  // restart quiz
  const restartQuiz = () => {
    toggleShowResults(false);
    updateCorrect(0);
    updateAnswered(0);
    setCurrentQIndex(0);
    loadRandomQuestions();
  };

  // update current three questions
  const loadRandomQuestions = () => {
    const questionSet = [];
    // get three random questions (Map<number, boolean> where the key is the index where a question lies.)
    const questionsMap = randomThree(questions.length);
    // and push each random question into the new array
    for (const n of questionsMap.keys()) {
      questionSet.push(questions[n]);
    }
    // use the new array to update our current questions
    getCurrentQuestions(questionSet);
    setCurrentQsLoaded(true);
  };

  useEffect(() => {
    loadRandomQuestions();
  }, []);

  // Answer Question Logic: method takes in an answer
  const answerQuestion = (userAnswer) => {
    // handle empty answer
    if (userAnswer === "") return alert("Please answer the question!");
    // increments state, "correct", by 1 if the answer was correct
    const { correct_answer } = currentQuestions[currentQIndex];
    if (equalStrings(userAnswer, correct_answer)) updateCorrect(correct + 1);
    // increment the answer count, then update the current question
    updateAnswered(answered + 1);
    // if we've answered our last question, then show the results page
    if (currentQIndex === currentQuestions.length - 1) toggleShowResults(true);
    // otherwise increment the current index
    else setCurrentQIndex(currentQIndex + 1);
  };

  const resultsJsx = (
    <div style={{ maxWidth: "80%", margin: "auto" }} >
      <Results correct={correct} answered={answered} />
      <Button text={"Restart Quiz"} action={() => restartQuiz()} />
    </div>
  );

  const questionJsx = (
    <Question
      questionProp={currentQuestions[currentQIndex]}
      answerQuestion={answerQuestion}
    />
  );

  const quizJsx = (
    <div className="quiz" style={{ width: "100%" }}>
      <h1 style={{ color: "#fff", cursor: "default" }}>You found me!</h1>
      {showResults ? resultsJsx : currentQsLoaded && questionJsx}
    </div>
  );

  return quizJsx;
};
