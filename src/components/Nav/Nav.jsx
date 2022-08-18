import React from "react";
import "./styles.scss";

const Nav = () => {
  return (
    <>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#expertise">Expertise</a>
        </li>
        <li>
          <a href="#industries">Industries</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#partners">Partners</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
      </ul>
    </>
  );
};
export default Nav;
