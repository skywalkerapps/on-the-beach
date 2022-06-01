import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders results of hotels list", () => {
  render(<App />);
  expect(screen.getByTestId("results-list")).toBeVisible();
});
