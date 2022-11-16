import React, { useState } from "react";

const MyRoutines = (props) => {
  const isLogin = props.isLogin;

  const [checked, setChecked] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const goal = e.target[1].value;
    const isPublic = checked;
    console.log(isPublic, "set routine to public");
    // const result = await createActivity(name, goal, isPublic);
    // console.log(result, "Created activity!");
  }

  return (
    <div>
      <h1>This is My Routines</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="createRoutineForm"
          className="input"
          type="text"
          name="name"
          placeholder="Routine name"
        ></input>
        <input
          className="input"
          type="text"
          name="goal"
          placeholder="Routine goal"
        ></input>
        <div>
          <label>
            <input type="checkbox" onChange={setChecked(!checked)}></input>
            Make routine public
          </label>
        </div>
      </form>
      <button>Create Routine</button>
    </div>
  );
};
export default MyRoutines;
