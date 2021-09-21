import * as React from "react";
import { useHistory } from "react-router";

import { useAsync } from "../hooks/useAsync";
import { API_AMOUNT, API_TYPE, API_ENDPOINT, API_DIFFICULTY } from "../utils/constants";
import { UnreachableError } from "../utils/UnreachableError";
import { fetchQuestions } from "../utils/fetchQuestions";

import Question from "./Question";
import QuestionLoading from "./QuestionLoading";
import QuestionIdle from "./QuestionIdle";

import type { Answer, AnswersObject, QuestionObject } from "../types";

const apiOptions = {
  amount: API_AMOUNT,
  difficulty: API_DIFFICULTY,
  type: API_TYPE,
  endpoint: API_ENDPOINT,
};

function Quiz() {
  const [step, setStep] = React.useState(0);
  const answers = React.useRef<AnswersObject[]>([]).current;
  const history = useHistory();
  const { run, error, setError, status, data: questions } = useAsync<QuestionObject[]>({ status: "pending" });

  React.useEffect(() => {
    const controller = new AbortController();

    run(fetchQuestions({ ...apiOptions, abortSignal: controller.signal }));

    return () => controller.abort();
  }, [run]); // Function run isn't necessary in dependency list because it's already memoized. It's added here to avoid disabling eslint's rule react-hooks/exhaustive-deps for the whole array.

  function handleAnswer(answer: Answer) {
    if (questions == null) return setError(new Error("Error while processing answers."));

    if (step === Number(apiOptions.amount) - 1) {
      answers.push({
        question: questions[step].question,
        userAnswer: answer,
        correctAnswer: questions[step].correct_answer,
      });
      return history.push("/results", { answers });
    }

    answers.push({
      question: questions[step].question,
      userAnswer: answer,
      correctAnswer: questions[step].correct_answer,
    });
    setStep((step) => step + 1);
  }

  if (status === "pending") {
    return <QuestionLoading />;
  }

  if (status === "rejected") {
    throw error;
  }

  if (status === "resolved") {
    if (questions != null) {
      const children = questions.map((questionObj, idx) => (
        <Question
          key={idx}
          category={questionObj.category}
          question={questionObj.question}
          handleClick={handleAnswer}
        />
      ));

      return children[step];
    }

    throw new Error("Encountered error while displaying questions.");
  }

  if (status === "idle") {
    return <QuestionIdle handleClick={() => run(fetchQuestions(apiOptions))} />;
  }
  throw new UnreachableError(status, "Sorry, the app is in corrupt state, please start again.");
}

export default Quiz;
