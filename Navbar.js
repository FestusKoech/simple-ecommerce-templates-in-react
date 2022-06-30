import React, { useState } from "react";
import "./navbar.css";
// import Login from"./login"
// import Signup  from "./signup";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="navH1">
       Jumia
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
          Contact
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Search
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Signin
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Signup
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;