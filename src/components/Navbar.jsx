import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <span id="upperNavContainer">
        <button id="homeButton">Button to somewhere</button>
      </span>
      <div id="navbar">
        I am Navbar
        <NavLink id="navRegister" to="Register">
          Register
        </NavLink>
        <NavLink id="navHome" to="Home">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
