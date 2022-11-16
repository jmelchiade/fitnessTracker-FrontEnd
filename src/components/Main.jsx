import React, { useState, useEffect } from "react";
import {
  Navbar,
  Register,
  Home,
  Login,
  MyRoutines,
  Activities,
  Routines,
} from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [isLogin, setLogin] = useState(false);
  // const [userLoggedIn, setUserLoggedIn] = useState({});
  const [allActivities, setAllActivities] = useState([]);
  const [allRoutines, setAllRoutines] = useState([]);


  //add use effect for checking if token exists in local storage for auto logging in user 
  
  return (
    <div id="main">
      <Navbar isLogin={isLogin} setLogin={setLogin} />
      <Routes>
        <Route path="register" element={<Register setLogin={setLogin} />} />

        <Route path="home" element={<Home />} />

        <Route
          path="login"
          element={<Login isLogin={isLogin} setLogin={setLogin} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="myRoutines" element={<MyRoutines />} />
        <Route
          path="activities"
          element={
            <Activities
              allActivities={allActivities}
              setAllActivities={setAllActivities}
              isLogin={isLogin}
            />
          }
        />
        <Route
          path="routines"
          element={
            <Routines
              allRoutines={allRoutines}
              setAllRoutines={setAllRoutines}
              isLogin={isLogin}
            />
          }
        />
      </Routes>
      <h1>This is Main Content</h1>
    </div>
  );
};

export default Main;
