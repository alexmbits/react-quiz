import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import App from "../components/App";

test("shows a spinner and renders homepage with the button to begin", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  await waitForElementToBeRemoved(() => screen.getByRole("heading", { name: /loading/i }));

  const linkElement = screen.getByRole("button", { name: /begin/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveClass("btn-primary");
});
