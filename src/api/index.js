const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";
const COHORT = "2209-FTB-ET-WEB-FT";

// this is our function to get the local stored token, add this locally to each function where it is required
// const token = localStorage.getItem("token");
//set all api functions to a try/catch for credit!!

//register user
export async function registerUser(username, password) {
  console.log(username, password, "banana");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  // const response = await fetch(
  //   `${BASE_URL}/api/users/register`,
  //   options
  // );
  const response = await fetch(
    `http://fitnesstrac-kr.herokuapp.com/api/users/register`,
    options
  );
  const result = await response.json();
  console.log(result, "This is register data!!");
  // return result.data.token;
  return result;
}

//login user
export async function loginUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  const response = await fetch(
    "https://fitnesstrac-kr.herokuapp.com/api/users/login",
    options
  );
  const result = await response.json();
  console.log(result, "userInfo data");
  return result;
}

//This route is used to grab an already logged in user's relevant data. It is mostly helpful for verifying the user has a valid token (and is thus logged in). You must pass a valid token with this request, or it will be rejected.
export async function getUserInfo() {
  const token = localStorage.getItem("token");
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    "https://fitnesstrac-kr.herokuapp.com/api/users/me",
    options
  );
  const result = await response.json();
  console.log(result, "logged in user data!");
  return result;
}

//get all user routines via username
//may need to modify to get func working for logged in user vs random user (no token local)
export async function getRoutinesByUsername(username) {
  const token = localStorage.getItem("token");
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`,
    options
  );
  const result = await response.json();
  console.log("this is username routine data!", result);
  return result;
}

//get all activities
export async function getAllActivities() {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    "http://fitnesstrac-kr.herokuapp.com/api/activities",
    options
  );
  const result = await response.json();
  console.log("pineapple", result);
  return result;
}

//create new activity
export async function createActivity(name, description) {
  const token = localStorage.getItem("token");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      description,
    }),
  };
  const response = await fetch(
    "http://fitnesstrac-kr.herokuapp.com/api/activities",
    options
  );
  const result = await response.json();
  return result;
}

// create routine
export async function createRoutine(name, goal, isPublic) {
  const token = localStorage.getItem("token");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      goal,
      isPublic,
    }),
  };
  const response = await fetch(
    "http://fitnesstrac-kr.herokuapp.com/api/routines",
    options
  );
  const result = await response.json();
  return result;
}
