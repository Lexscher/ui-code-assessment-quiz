import React from "react";

import { fracToPerc, rounder } from "./utilities/MathHelpers";

export const Results = ({ correct, answered }) => {
  // calculate summary results
  const wrong = answered - correct;
  const baseScore = fracToPerc(correct, answered);
  const finalScore = rounder(baseScore);

  // JSX
  const resultsJsx = (
    <div>
      <h2>SUMMARY</h2>
      <p>
        Correct: <b>{correct}</b>
      </p>
      <p>
        Wrong: <b>{wrong}</b>
      </p>
      <p>
        Questions answered: <b>{answered}</b>
      </p>
      <p>
        Final Score: <b>{finalScore}%</b>
      </p>
    </div>
  );

  return resultsJsx;
};
