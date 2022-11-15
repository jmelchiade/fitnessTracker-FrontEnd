import React, { useState, useEffect } from "react";
import { Navbar, Register, Home, Login, Profile, Activities } from "./";
import { Routes, Route } from "react-router-dom";
import { getUserInfo } from "../api";

const Main = () => {
  const [isLogin, setLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState({});

  const userLogin = async () => {
    const user = await getUserInfo(localStorage.getItem("token"));
    setUserLoggedIn(user);
    setLogin(true);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      userLogin();
    }
  }, []);
  console.log(isLogin, "user logged in data");
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
              userLogin={userLogin}
              setLogin={setLogin}
            />
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="profile"
          element={<Profile userLoggedIn={userLoggedIn} />}
        />

        <Route path="activities" element={<Activities />} />
      </Routes>
      <h1>This is Main Content</h1>
    </div>
  );
};

export default Main;
