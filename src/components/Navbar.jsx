import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <span id="upperNavContainer"></span>
      <div id="navbar">
        Fitness Tracker Navbar{" "}
        <button id="registerButton">
          <NavLink id="navRegister" to="Register">
            Register
          </NavLink>
        </button>
        <button id="homeButton">
          <NavLink id="navHome" to="Home">
            Home
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
