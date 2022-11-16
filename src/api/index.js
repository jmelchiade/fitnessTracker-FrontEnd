// url = "https://fitnesstrac-kr.herokuapp.com/"
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";
const COHORT = "2209-FTB-ET-WEB-FT";

// this is our function to get the local stored token
const token = localStorage.getItem("token");

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

// export async function getUserInfo(token) {
//   console.log(token);
//   const response = await fetch(
//     "https://fitnesstrac-kr.herokuapp.com/api/users/register",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(username, password),
//     }
//   );
//   // console.log(getUserInfo);

//   const result = await response.json();
//   return result.data;
// }

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

// get all routines

export async function createRoutine(name, goal, isPublic) {
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
  console.log(result, "banana");
  return result;
}
