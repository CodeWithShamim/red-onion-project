import React from "react";

const DinnerDetail = ({ item }) => {
  const { name, description, img } = item;
  return (
    <div className="breakfast-single-container">
      <img className="breakfast-img" src={img} alt="breakfastItem" />
      <h5>{name}</h5>
      <p>{description}</p>
    </div>
  );
};

export default DinnerDetail;
