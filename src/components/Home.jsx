import React, {useEffect, useState} from "react";
import { getUserInfo } from "../api";

const Home = (props) => {
// const [currentUser, setCurrentUser] = useState([]);
const currentUserData = props.currentUserData;
const isLogin = props.isLogin;
const setLogin = props.isLogin;

console.log(currentUserData)

  return (
    <div id="home">
      <h1>This is Home</h1>
    </div>
  );
};

export default Home;
