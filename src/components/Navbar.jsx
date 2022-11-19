import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const isLogin = props.isLogin;
  const username = localStorage.getItem("username");
  const setLogin = props.setLogin;
  return (
    <div>
      <span id="upperNavContainer"></span>
      <div id="navbar">
        <b>
          FITNESS TRACKER{" "}
          <div>{isLogin === true ? <h5>{`${username}`}</h5> : null}</div>
        </b>
        {props.isLogin === false ? (
          <div>
            <button id="registerButton">
              <NavLink id="navRegister" to="register">
                Register
              </NavLink>
            </button>
            <button id="loginButton">
              <NavLink id="navLogin" to="login">
                Login
              </NavLink>
            </button>
          </div>
        ) : null}
        {props.isLogin ? (
          <button id="myRoutinesButton">
            <NavLink id="navMyRoutines" to="myroutines">
              My Routines
            </NavLink>
          </button>
        ) : null}
        {props.isLogin ? (
          <button
            id="logOutButton"
            onClick={() => {
              props.setLogin(false);
              // localStorage.removeItem("token");
            }}
          >
            Log Out
          </button>
        ) : null}
        <button id="homeButton">
          <NavLink id="navHome" to="/">
            Home
          </NavLink>
        </button>
        <button id="activitiesButton">
          <NavLink id="navActivities" to="activities">
            Activities
          </NavLink>
        </button>
        <button id="routinesButton">
          <NavLink id="navRoutines" to="routines">
            Routines
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
