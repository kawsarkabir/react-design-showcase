import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="Header">
      <img src={logo} alt="logo" />
      <div className="ul-list">
        <a href="#">Order</a>
        <a href="#">Order Review</a>
        <a href="#">Manage Inventory</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Header;
