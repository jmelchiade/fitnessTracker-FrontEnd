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
        <button id="registerButton">
          <NavLink id="navLogin" to="Login">
            Login
          </NavLink>
        </button>
        <button id="activitiesButton">
          <NavLink id="navActivities" to="Activities">
            Activities
          </NavLink>
        </button>
        <button id="routinesButton">
          <NavLink id="navRoutines" to="Routines">
            Routines
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
