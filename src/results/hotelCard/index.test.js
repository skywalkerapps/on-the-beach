import { render, screen, fireEvent } from "@testing-library/react";
import HotelData from "../../mocks/data";
import HotelCard from "./index";

describe("Hotel Card", () => {
  it("displays the individual hotel card for the user", () => {
    render(<HotelCard hotelInfo={HotelData[0]} />);

    expect(screen.getByTestId("hotel-card")).toBeVisible();
  });

  it("displays the star rating of the hotel", () => {
    render(<HotelCard hotelInfo={HotelData[0]} />);

    expect(screen.getAllByTestId("hotel-star")).toHaveLength(5);
  });

  it("displays the amount of adults on the hotel card", () => {
    render(<HotelCard hotelInfo={HotelData[0]} />);

    expect(screen.getByTestId("guests-adults")).toBeVisible();
  });

  it("displays the amount of children on the hotel card", () => {
    render(<HotelCard hotelInfo={HotelData[0]} />);

    expect(screen.getByTestId("guests-children")).toBeVisible();
  });

  it("displays the amount of infants on the hotel card", () => {
    render(<HotelCard hotelInfo={HotelData[0]} />);

    expect(screen.getByTestId("guests-infants")).toBeVisible();
  });

  it("displays the hotel overview when read more button is clicked", () => {
    render(<HotelCard hotelInfo={HotelData[0]} />);

    expect(
      screen.queryByText("The Iberostar Grand Salome")
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("see-more-button"));

    expect(screen.getByTestId("hotel-description")).toBeVisible();
  });
});
