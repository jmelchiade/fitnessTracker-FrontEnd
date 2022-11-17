import React, { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    // const username = event.target[0].value;
    // const password = event.target[1].value;
    const userData = await registerUser(username, password);
    if (userData.error) {
      //display an error message to user on the page regarding duplicate username
      //or short password
    }
    else {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        const token = userData.token;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username)
        props.setLogin(true);
    }
    // const token = userData.token;
    // localStorage.removeItem("token");
    // localStorage.setItem("token", token);
    // const approvedUsername = userData.user.username
    // localStorage.removeItem("username");
    // localStorage.setItem("username", approvedUsername);
    // props.setLogin(true);
  }
  return (
    <div id="register">
      <h1>This is Register</h1>
      <div className="regForm">
        <form onSubmit={handleSubmit}>
          <label id="userRegForm" htmlFor="username"></label>
          <input id="username"
          type="text" 
          required placeholder="username"
          value = {username}
          onChange = {e => setUsername(e.target.value)}
          />
          <label id="passRegForm" htmlFor="password"></label>
          <input id="password" 
          type="password" 
          required placeholder="password"
          value = {password}
          onChange = {e => setPassword(e.target.value)}
          />
          <button id="subBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
