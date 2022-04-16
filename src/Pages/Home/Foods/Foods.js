import React from "react";
import { Link } from "react-router-dom";

const Foods = () => {
  return (
    <div>
      <Link to="/breakfast">Breakfast</Link>
      <Link to="/lunch">Lunch</Link>
      <Link to="/dinner">Dinner</Link>
    </div>
  );
};

export default Foods;
