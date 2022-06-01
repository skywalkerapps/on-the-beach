import React from "react";
import Hotels from "./hotels";

import "./index.css";

const ResultList = () => {
  const [hotelFilter, setHotelFilter] = React.useState("price");

  const checkSelectedFilter = (filter, selectedFilter) => {
    return selectedFilter === filter ? "selected" : "";
  };

  return (
    <div className="results-container" data-testid="results-list">
      <ul className="results-list">
        <li>
          <button
            className={`filter ${checkSelectedFilter(
              "alphabetical",
              hotelFilter
            )}`}
            onClick={() => setHotelFilter("alphabetical")}
            data-testid="alphabetical-button"
          >
            sort by <strong>alphabetically</strong>
          </button>
        </li>
        <li>
          <button
            className={`filter ${checkSelectedFilter("price", hotelFilter)}`}
            onClick={() => setHotelFilter("price")}
            data-testid="price-button"
          >
            sort by <strong>price</strong>
          </button>
        </li>
        <li>
          <button
            className={`filter ${checkSelectedFilter(
              "starRating",
              hotelFilter
            )}`}
            onClick={() => setHotelFilter("starRating")}
            data-testid="star-rating-button"
          >
            sort by <strong>star rating</strong>
          </button>
        </li>
      </ul>
      <Hotels filter={hotelFilter} />
    </div>
  );
};

export default ResultList;
