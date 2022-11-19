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
  EditRoutine,
} from "./";
import { Routes, Route } from "react-router-dom";
import { getUserInfo } from "../api";

const Main = () => {
  const [isLogin, setLogin] = useState(false);
  //piece of state containing user data (object with id, username)
  const [currentUserData, setCurrentUserData] = useState({});
  const [allActivities, setAllActivities] = useState([]);
  const [allRoutines, setAllRoutines] = useState([]);
  const [selectedUserRoutine, setSelectedUserRoutine] = useState({});

  useEffect(() => {
    //we should only have successfully stored local token data
    //from our if/else in login/register components
    if (localStorage.getItem("token")) {
      setLogin(true);
    }
  }, []);

  useEffect(() => {
    async function getCurrentUserInfo() {
      const userInfo = await getUserInfo();
      console.log("collected user data!", userInfo);
      setCurrentUserData(userInfo);
    }
    getCurrentUserInfo();
  }, []);
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
        <Route
          path="/"
          element={
            <Home
              isLogin={isLogin}
              setLogin={setLogin}
              currentUserData={currentUserData}
            />
          }
        />
        <Route
          path="myRoutines"
          element={
            <MyRoutines
              allRoutines={allRoutines}
              setAllRoutines={setAllRoutines}
              isLogin={isLogin}
              currentUserData={currentUserData}
              selectedUserRoutine={selectedUserRoutine}
              setSelectedUserRoutine={setSelectedUserRoutine}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <EditRoutine
              isLogin={isLogin}
              currentUserData={currentUserData}
              selectedUserRoutine={selectedUserRoutine}
            />
          }
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
      <Footer />
    </div>
  );
};

export default Main;
