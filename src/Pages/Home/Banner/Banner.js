import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mb-5">
      <div className="banner-section d-flex justify-content-center align-items-center flex-column">
        <h2>Best food waiting for your belly</h2>

        <span className="search-container">
          {" "}
          <input
            className="search-box"
            type="search"
            name="search"
            id="search"
            placeholder="Search food items"
          />
          <button className="search-btn">Search</button>
        </span>
      </div>
    </div>
  );
};

export default Banner;
