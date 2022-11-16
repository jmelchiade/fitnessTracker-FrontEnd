import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const isLogin = props.isLogin;
  const setLogin = props.setLogin;
  return (
    <div>
      <span id="upperNavContainer"></span>
      <div id="navbar">
        Fitness Tracker Navbar
        {props.isLogin === false ? (
          <div>
            <button id="registerButton">
              <NavLink id="navRegister" to="Register">
                Register
              </NavLink>
            </button>
            <button id="loginButton">
              <NavLink id="navLogin" to="Login">
                Login
              </NavLink>
            </button>
          </div>
        ) : null}
        {props.isLogin ? (
          <button
            id="homeButton"
            onClick={() => {
              props.setLogin(false);
            }}
          >
            <NavLink id="navMyRoutines" to="MyRoutines">
              My Routines
            </NavLink>
          </button>
        ) : null}
        {props.isLogin ? (
          <button
            id="logOut"
            onClick={() => {
              props.setLogin(false);
              // localStorage.removeItem("token");
            }}
          >
            Log Out
          </button>
        ) : null}
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
