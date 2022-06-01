import React from "react";

import "./index.css";

const HotelCard = ({ hotelInfo }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <li className="hotel-container">
      <div className="hotel-card" data-testid="hotel-card">
        <div className="hotel-overview">
          <div className="hotel-image">
            <img
              src={process.env.PUBLIC_URL + hotelInfo.image}
              alt={hotelInfo.name}
            />
            <button
              className="see-more-button"
              data-testid="see-more-button"
              onClick={() => {
                setShowDetails(!showDetails);
              }}
            >
              {showDetails ? (
                <p>
                  Read less about this hotel
                  <span className="arrow"> &#62;</span>
                </p>
              ) : (
                <p>Read more about this hotel &#62;</p>
              )}
            </button>
          </div>
          <div className="hotel-details">
            <h1>{hotelInfo.name}</h1>
            <h3>
              {hotelInfo.place}, {hotelInfo.country}
            </h3>
            {[...Array(hotelInfo.starRating)].map((_, index) => {
              return (
                <span
                  key={`${hotelInfo.name}-${index}`}
                  className="hotel-star"
                  data-testid="hotel-star"
                >
                  &#x2605;
                </span>
              );
            })}
            <div className="hotel-guests">
              {hotelInfo.guests[0].adults && (
                <p data-testid="guests-adults">
                  {hotelInfo.guests[0].adults} adults,
                </p>
              )}
              {hotelInfo.guests[0].children && (
                <p data-testid="guests-children">
                  {hotelInfo.guests[0].children} children
                </p>
              )}
              {hotelInfo.guests[0].child && (
                <p data-testid="guests-child">
                  {hotelInfo.guests[0].child} child
                </p>
              )}
              {hotelInfo.guests[0].infants && (
                <p data-testid="guests-infants">
                  {" "}
                  & {hotelInfo.guests[0].infants} infant
                </p>
              )}
            </div>
            <p>
              <b>{new Date(hotelInfo.flightDate).toDateString()}</b> for{" "}
              {hotelInfo.noOfDays} <b>days</b>
            </p>
            <p>
              departing from <b>{hotelInfo.airport}</b>
            </p>
            <button className="book-now-button">
              <span className="book-now-text">Book now</span>
              <span>£{hotelInfo.price.toFixed(2)}</span>
            </button>
          </div>
        </div>
        {showDetails && (
          <div className="hotel-description" data-testid="hotel-description">
            <h4>Overview</h4>
            <p>{hotelInfo.details}</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default HotelCard;
