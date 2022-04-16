import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import FoodsHeader from "../Foods/FoodsHeader";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodsHeader></FoodsHeader>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
