import React from "react";
import { Link } from "react-router-dom";

const FoodsHeader = () => {
  return (
    <div className="food-header">
      <Link className="me-5 text-dark fs-4" to="/breakfast">
        Breakfast
      </Link>
      <Link className="me-5 text-dark fs-4" to="/lunch">
        Lunch
      </Link>
      <Link className="text-dark fs-4" to="/dinner">
        Dinner
      </Link>
    </div>
  );
};

export default FoodsHeader;
