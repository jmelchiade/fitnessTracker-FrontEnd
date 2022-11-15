// url = "https://fitnesstrac-kr.herokuapp.com/"
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";
const COHORT = "2209-FTB-ET-WEB-FT";

const getTokenFromLocal = localStorage.getItem("token");

//register user
export async function registerUser(username, password) {
  console.log(username, password, "banana");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
  return result.data;
}

export async function getUserInfo(token) {
  console.log(token);
  const response = await fetch(
    "https://fitnesstrac-kr.herokuapp.com/api/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(username, password),
    }
  );
  // console.log(getUserInfo);

  const result = await response.json();
  return result.data;
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
  return result.data;
}
//get all routines
