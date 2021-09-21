import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import ErrorBoundary from "../components/ErrorBoundary";
import ErrorFallback from "../components/ErrorFallback";
import Results from "../components/Results";

test("renders correct results and a link to start again", async () => {
  const history = createMemoryHistory();
  const locationState = {
    answers: [
      {
        question:
          "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
        userAnswer: "True",
        correctAnswer: "True",
      },
      {
        question:
          "The song &quot;Mystery Train&quot; was released by artist &quot;Little Junior&#039;s Blue Flames&quot; in 1953.",
        userAnswer: "False",
        correctAnswer: "True",
      },
    ],
  };

  history.push("/results", locationState);
  render(
    <Router history={history}>
      <ErrorBoundary onReset={() => {}} FallbackComponent={ErrorFallback}>
        <Results />
      </ErrorBoundary>
    </Router>
  );

  const score = await screen.findByRole("heading", { name: /you scored/i });

  expect(score).toHaveTextContent("You scored:1/2");

  const items = await screen.findAllByRole("listitem");

  expect(items[0]).toHaveTextContent("✔");
  expect(items[1]).toHaveTextContent("❌");
});

test("to show error if location state is invalid", async () => {
  const history = createMemoryHistory();
  const locationState = {
    answers: ["Invalid"],
  };
  history.push("/results", locationState);

  const errorMock = jest.spyOn(console, "error");
  errorMock.mockImplementation(() => {});

  render(
    <Router history={history}>
      <ErrorBoundary onReset={() => {}} FallbackComponent={ErrorFallback}>
        <Results />
      </ErrorBoundary>
    </Router>
  );

  expect(await screen.findByRole("alert")).toHaveTextContent(/sorry, something went wrong\./i);
});
