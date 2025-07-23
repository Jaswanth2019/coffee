import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="leftside">
        <img
          src="https://corretto.qodeinteractive.com/wp-content/themes/corretto/assets/img/logo-light.png"
          alt="LOGO"
        />
      </div>
      <div className="rightside">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PAGES</a>
          </li>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">ELEMENTS</a>
          </li>
          <li>
            <span className="material-symbols-outlined white-icon">search</span>
          </li>
          <li>
            <span className="material-symbols-outlined white-icon">
              shopping_cart
            </span>
          </li>
          <li>
            <span className="material-symbols-outlined white-icon">menu</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
