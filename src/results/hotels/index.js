import React from "react";
import HotelData from "../../mocks/data";
import HotelCard from "../hotelCard";

import "./index.css";

const HotelList = ({ filter }) => {
  const hotelData = (filter) => {
    if (filter === "alphabetical") {
      return HotelData.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (filter === "starRating") {
      return HotelData.sort((a, b) => b.starRating - a.starRating);
    }
    return HotelData.sort((a, b) => b.price - a.price);
  };

  return (
    <ul className="hotel-list" data-testid="hotel-list">
      {hotelData(filter).map((hotel) => {
        return <HotelCard key={hotel.name} hotelInfo={hotel} />;
      })}
    </ul>
  );
};

export default HotelList;
