import React, { useState } from "react";
// Dependencies

import { Link } from "react-scroll";
import logo from "../assets/logo.png";
// CSS
import "../CSS/navbar.css";

function Nav(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // Active navbar stat
  const [nav, setNav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  //   Scroll to div

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link
        className="link-to"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
      >
        <div className="brand">
          {" "}
          <img src={props.logoimg} className="logo-img" alt="" />
        </div>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <div className="nav-links">
            <Link
              to="home"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
              className="link-to"
            >
              Home
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-links">
            <Link
              onClick={closeMobileMenu}
              className="link-to"
              to="about"
              spy={true}
              smooth={true}
            >
              Projects
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-links" onClick={closeMobileMenu}>
            About
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
