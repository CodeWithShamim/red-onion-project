import React from "react";

const Footer = () => {
  return (
    <div
      className="py-3"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "green",
      }}
    >
      <p className="text-light">Copyright &copy; 2022</p>
    </div>
  );
};

export default Footer;
