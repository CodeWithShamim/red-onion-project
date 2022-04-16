import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Foods from "../Foods/Foods";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Foods></Foods>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
