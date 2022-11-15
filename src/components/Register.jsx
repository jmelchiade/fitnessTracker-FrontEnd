import React from "react";

const Register = () => {
  return (
    <div id="register">
      <h1>This is Register</h1>
      <div className="regForm">
        <form>
          <label id="userRegForm" htmlFor="username">
            Username:{" "}
          </label>
          <input id="username" type="text" required />
          <label id="passRegForm" htmlFor="password">
            Password:{" "}
          </label>
          <input id="password" type="password" />
          <button id="subBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
