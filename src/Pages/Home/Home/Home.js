import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner-section d-flex justify-content-center align-items-center flex-column">
        <h1>Best food waiting for your belly</h1>

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

export default Home;
