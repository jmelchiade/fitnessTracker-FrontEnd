// url = "https://fitnesstrac-kr.herokuapp.com/"

//register user
export async function registerUser(username, password, token) {
  console.log(token, "banana");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      username,
      password,
      token,
    }),
  };

  const response = await fetch(
    "https://fitnesstrac-kr.herokuapp.com/api/users/register",
    options
  );
  const result = await response.json();
  console.log(result.data, "This is register data!!");
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
  console.log(getUserInfo);

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
    "https://fitnesstrac-kr.herokuapp.com/",
    options
  );
  const result = await response.json();
  return result.data;
}
//get all routines
