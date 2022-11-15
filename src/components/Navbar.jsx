import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <span id="upperNavContainer">
        <button id="homeButton">Home</button>
      </span>
      <div id="navbar">
        I am Navbar
        <NavLink id="homeNavLink" to="Register">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
