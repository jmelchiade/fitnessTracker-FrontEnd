import React, { useState, useEffect } from "react";
import { Navbar, Register, Home, Login, Profile, Activities, Routines } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [isLogin, setLogin] = useState(false);
  // const [userLoggedIn, setUserLoggedIn] = useState({});
  const [allActivities, setAllActivities] = useState([]);
  const [allRoutines, setAllRoutines] = useState([]);

  // const userLogin = async () => {
  //   const user = await getUserInfo(localStorage.getItem("token"));
  //   setUserLoggedIn(user);
  //   setLogin(true);
  // };
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     userLogin();
  //   }
  // }, []);
  // console.log(isLogin, "user logged in data");

  return (
    <div id="main">
      <Navbar isLogin={isLogin} setLogin={setLogin} />
      <Routes>
        <Route path="register" element={<Register setLogin={setLogin} />} />

        <Route path="home" element={<Home />} />

        <Route
          path="login"
          element={
            <Login
              isLogin={isLogin}
              setLogin={setLogin}
            />
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="profile"
          element={<Profile />}
        />
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
        <Route path="routines" element={<Routines 
        allRoutines={allRoutines}
        setAllRoutines={setAllRoutines}
        isLogin={isLogin} />} 
        />
      </Routes>
      <h1>This is Main Content</h1>
    </div>
  );
};

export default Main;
