import { render, screen } from "@testing-library/react";
import HotelList from "./index";

describe("Hotel List", () => {
  it("displays hotel list for the user", () => {
    render(<HotelList />);

    expect(screen.getByTestId("hotel-list")).toBeVisible();
  });
});
