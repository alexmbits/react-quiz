import * as React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { unescape } from "he";

import { useErrorHandler } from "../hooks/useErrorHandler";

import Button from "./Button";
import Card from "./Card";

import { isAnswersObject, isTypedArray } from "../type-guards";

function Results() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [results, setResults] = React.useState<JSX.Element[]>([]);
  let score = React.useRef(0);
  const setError = useErrorHandler();

  const { state: locationState } = useLocation<LocationState>();

  React.useEffect(() => {
    if (!locationState || !isTypedArray(locationState.answers, isAnswersObject)) {
      return setError(
        new Error("Error while calculating results. Did you navigate to results page without answering questions?")
      );
    }

    const toRender = locationState.answers.map((answer, idx) => {
      const correct = answer.userAnswer === answer.correctAnswer;
      if (correct) score.current += 1;

      return <li key={idx}>{`${unescape(answer.question)} ${correct ? "✔" : "❌"}`}</li>;
    });

    setResults(toRender);
    setIsLoading(false);
  }, [locationState, setError]);

  if (isLoading) {
    return (
      <Card>
        <h2 className="heading">Calculating results...</h2>
        <div className="main-text">
          <p>Please wait.</p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="heading">
        You scored:
        <br />
        {`${score.current}/${results!.length}`}
      </h2>
      <div className="main-text">
        <ol>{results}</ol>
        <div className="text-center">
          <Link to="/">
            <Button type="button">Play again</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

type LocationState = undefined | { [k: string]: unknown };

export default Results;
