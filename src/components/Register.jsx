import React from "react";
import { registerUser } from "../api";

const Register = (props) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const userData = await registerUser(username, password);
    const token = userData.token;
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    // const registeredUser = await registerUser(username, password);
    // const token = registeredUser.token;
    props.setLogin(true);
    // localStorage.removeItem("token");
    // localStorage.setItem("token", token);
    // localStorage.removeItem("username");
    // localStorage.setItem("username", username);
  }
  return (
    <div id="register">
      <h1>This is Register</h1>
      <div className="regForm">
        <form onSubmit={handleSubmit}>
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
