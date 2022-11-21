import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    // const username = event.target[0].value;
    // const password = event.target[1].value;
    const loggedInUser = await loginUser(username, password);
    if (loggedInUser.error) {
      const message = loggedInUser.message;
      setError(message);
      //add display error to user here later
      // return messages;
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      const token = loggedInUser.token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      props.setLogin(true);
      navigate("/");
    }
  }
  return (
    <div id="login">
      <h1>This is Login</h1>
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          <label id="userFront" htmlFor="username"></label>
          <input
            id="username"
            type="text"
            required
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label id="passFront" htmlFor="password"></label>
          <input
            id="password"
            type="password"
            required
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="logInBtn" type="submit">
            LOG IN
          </button>
        </form>
      </div>
      {error ? (
        <div>
          <h3>{`${error}`}</h3>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
