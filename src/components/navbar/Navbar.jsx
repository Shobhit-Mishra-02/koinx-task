import "./Navbar.css";
import { IoMdMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import logo from "../../../public/logo.png";

import { useState } from "react";

function Options() {
  return (
    <>
      <li>Crypto Taxes</li>
      <li>Free Tools</li>
      <li>Resource Center</li>
      <li>
        <button>Get Started</button>
      </li>
    </>
  );
}

function Navbar() {
  const [toggle, setToggle] = useState(false);

  function makeToggle() {
    setToggle(!toggle);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar_container">
          <span className="navbar_logo">
            <img src={logo} alt="logo" />
          </span>
          <span className="navbar_hamburger" onClick={makeToggle}>
            {toggle ? <FiX /> : <IoMdMenu />}
          </span>
          <ul className="navbar_options__desktop">
            <Options />
          </ul>
        </div>
        <ul
          className={`navbar_options__mobile ${
            toggle ? "show_navbar" : "hide_navbar"
          }`}
        >
          <Options />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
