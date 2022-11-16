import React, {useEffect, useState} from "react";
import { getUserInfo } from "../api";

const Home = () => {
const [currentUser, setCurrentUser] = useState([]);

// const userData =  getUserInfo();

// useEffect(() => {
//   const userData = await getUserInfo();
// }, []);


  return (
    <div id="home">
      <h1>This is Home</h1>
    </div>
  );
};

export default Home;
