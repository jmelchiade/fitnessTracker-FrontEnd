import React, { useEffect, useState } from "react";
// import { getUserInfo } from "../api";

const Home = (props) => {
  // const [currentUser, setCurrentUser] = useState([]);
  const currentUserData = props.currentUserData;
  const isLogin = props.isLogin;
  const username = localStorage.getItem("username");

  return (
    <div id="home">
      <div>
        {isLogin === true ? (
          <h1>{`Welcome ${username}`}</h1>
        ) : (
          <h1>Please register or login</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
