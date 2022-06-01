import { render, screen, fireEvent } from "@testing-library/react";
import ResultList from "./index";

describe("Results List", () => {
  it("displays results list for the user", () => {
    render(<ResultList />);

    expect(screen.getByTestId("results-list")).toBeVisible();
  });

  it("displays results list ordered by price in default", () => {
    render(<ResultList />);

    const firstCard = screen.getAllByRole("img")[0];
    const secondCard = screen.getAllByRole("img")[1];
    expect(firstCard.src).toContain("iberostarGrand.png");
    expect(secondCard.src).toContain("AguamarinaGolf.png");
  });

  it("displays results list ordered by alphabetical once filter been clicked", () => {
    render(<ResultList />);

    fireEvent.click(screen.getByTestId("alphabetical-button"));

    const firstCard = screen.getAllByRole("img")[0];
    const secondCard = screen.getAllByRole("img")[1];
    expect(firstCard.src).toContain("AguamarinaGolf.png");
    expect(secondCard.src).toContain("iberostarGrand.png");
  });

  it("displays results list ordered by star rating once filter been clicked", () => {
    render(<ResultList />);

    fireEvent.click(screen.getByTestId("star-rating-button"));

    const firstCard = screen.getAllByRole("img")[0];
    const secondCard = screen.getAllByRole("img")[1];
    expect(firstCard.src).toContain("iberostarGrand.png");
    expect(secondCard.src).toContain("AguamarinaGolf.png");
  });

  it("displays results list ordered by price again once filter been clicked", () => {
    render(<ResultList />);

    fireEvent.click(screen.getByTestId("star-rating-button"));
    const firstCard = screen.getAllByRole("img")[0];
    const secondCard = screen.getAllByRole("img")[1];
    expect(firstCard.src).toContain("iberostarGrand.png");
    expect(secondCard.src).toContain("AguamarinaGolf.png");

    fireEvent.click(screen.getByTestId("price-button"));

    const firstCardFiltered = screen.getAllByRole("img")[0];
    const secondCardFiltered = screen.getAllByRole("img")[1];
    expect(firstCardFiltered.src).toContain("iberostarGrand.png");
    expect(secondCardFiltered.src).toContain("AguamarinaGolf.png");
  });
});
