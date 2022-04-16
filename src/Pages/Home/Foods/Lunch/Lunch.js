import React from "react";
import img1 from "../../../../images/lunch/lunch1.png";
import img2 from "../../../../images/lunch/lunch2.png";
import img3 from "../../../../images/lunch/lunch3.png";
import img4 from "../../../../images/lunch/lunch4.png";
import img5 from "../../../../images/lunch/lunch5.png";
import img6 from "../../../../images/lunch/lunch6.png";
import BreakfastDetail from "../Breakfast/BreakfastDetail";

const Lunch = () => {
  const breakfastItems = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: img1,
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: img2,
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: img3,
    },
    {
      id: 4,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: img4,
    },
    {
      id: 5,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: img5,
    },
    {
      id: 6,
      name: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: img6,
    },
  ];
  return (
    <div className="breakfast-container container">
      {breakfastItems.map((item) => (
        <BreakfastDetail key={item.id} item={item}></BreakfastDetail>
      ))}
    </div>
  );
};

export default Lunch;
