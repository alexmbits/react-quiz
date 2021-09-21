import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

import sampleResponse from "../utils/sampleResponse.json";
import Quiz from "../components/Quiz";
import ErrorBoundary from "../components/ErrorBoundary";
import ErrorFallback from "../components/ErrorFallback";

describe("quiz server is online", () => {
  const server = setupServer(
    rest.get("https://opentdb.com/api.php", async (req, res, ctx) => {
      return res(ctx.json(sampleResponse));
    })
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  test("renders the quiz and fetches the questions", async () => {
    render(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByRole("heading", { name: /loading/i }));

    const firstQuestion = await screen.findByRole("heading", { name: /entertainment: video games/i });
    const trueButton = await screen.findByRole("button", { name: /true/i });

    expect(firstQuestion).toBeInTheDocument();
    expect(trueButton).toBeInTheDocument();
    userEvent.click(trueButton);
    expect(firstQuestion).not.toBeInTheDocument();

    const falseButton = await screen.findByRole("button", { name: /false/i });
    const secondQuestion = await screen.findByRole("heading", { name: /general knowledge/i });

    expect(secondQuestion).toBeInTheDocument();
    expect(falseButton).toBeInTheDocument();
    userEvent.click(falseButton);
    expect(secondQuestion).not.toBeInTheDocument();
  });
});

describe("quiz server is offline", () => {
  const server = setupServer(
    rest.get("https://opentdb.com/api.php", async (req, res, ctx) => res.networkError("Server is offline"))
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  test("tries fetching the questions and shows the error to the user", async () => {
    const errorMock = jest.spyOn(console, "error");
    errorMock.mockImplementation(() => {});

    render(
      <MemoryRouter>
        <ErrorBoundary onReset={() => {}} FallbackComponent={ErrorFallback}>
          <Quiz />
        </ErrorBoundary>
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByRole("heading", { name: /loading/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/sorry, something went wrong\./i);

    expect(errorMock).toHaveBeenCalledTimes(2);
  });
});
