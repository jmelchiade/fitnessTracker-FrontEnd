import React from "react";
import { registerUser } from "../api";

const Register = () => {
  return (
    <div id="register">
      <h1>This is Register</h1>
      <div className="regForm">
        <form>
          <label id="userRegForm" htmlFor="username"></label>
          <input id="username" type="text" required placeholder="username" />
          <label id="passRegForm" htmlFor="password"></label>
          <input id="password" type="password" placeholder="password" />
          <button id="subBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
