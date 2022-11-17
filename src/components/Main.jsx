import React, { useState, useEffect } from "react";
import {
  Navbar,
  Register,
  Home,
  Login,
  MyRoutines,
  Activities,
  Routines,
  Footer,
} from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [isLogin, setLogin] = useState(false);
  // const [userLoggedIn, setUserLoggedIn] = useState({});
  const [allActivities, setAllActivities] = useState([]);
  const [allRoutines, setAllRoutines] = useState([]);

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setLogin();
  //   }
  // }, []);
  //add use effect for checking if token exists in local storage for auto logging in user
  //16nov22 - added useEffect for auto Login; sets login to ALWAYS true... sets all buttons to hide... Jen

  return (
    <div id="main">
      <Navbar isLogin={isLogin} setLogin={setLogin} />
      <Routes>
        <Route path="register" element={<Register setLogin={setLogin} />} />

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
        <Route path="footer" element={<Footer />} />
      </Routes>
      <h1>This is Main Content</h1>
      <Footer />
    </div>
  );
};

export default Main;
