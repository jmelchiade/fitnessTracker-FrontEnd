import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [userName, setUsername] = useState([]);
  let navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const loggedInUser = await loginUser(username, password);
    const token = loggedInUser.token;
    props.setLogin(true);
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
  }
  return (
    <div id="login">
      <h1>This is Login</h1>
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          <label id="userFront" htmlFor="username"></label>
          <input id="username" type="text" required placeholder="username" />
          <label id="passFront" htmlFor="password"></label>
          <input id="password" type="password" placeholder="password" />
          <button id="logInBtn" type="submit">
            LOG IN
          </button>
        </form>
      </div>{" "}
    </div>
  );
};

export default Login;
