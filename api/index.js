// url = https://fitnesstrac-kr.herokuapp.com/

//register user
export async function registerUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  };
  const response = await fetch(
    "https://fitnesstrac-kr.herokuapp.com/",
    options
  );
  const result = await response.json();
  return result.data;
}
//login user

//get all routines
