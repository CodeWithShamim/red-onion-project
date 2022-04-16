import React from "react";
import logo from "../../images/logo2.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container my-4 d-flex justify-content-between align-items-center">
      <img className="logo" src={logo} alt="logo" />
      <div>
        <span className="fw-bold me-4">Login</span>
        <button className="signup-btn ">Sign up</button>
      </div>
    </div>
  );
};

export default Header;
