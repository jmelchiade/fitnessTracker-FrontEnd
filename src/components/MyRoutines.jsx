import React, { useState } from "react";
import { createRoutine } from "../api";

//may need to add some functionality later:
//clear the form fields?
//maybe display users post?

const MyRoutines = (props) => {
  const isLogin = props.isLogin;
  const allRoutines = props.allRoutines;
  const setAllRoutines = props.setAllRoutines;

  const [checked, setChecked] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const goal = e.target[1].value;
    const isPublic = checked;
    console.log(name, goal, isPublic, "form data!!");
    const result = await createRoutine(name, goal, isPublic);
    console.log(result, "Created routine data!");
    setAllRoutines([result, ...allRoutines]);
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
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            ></input>
            Make routine public
          </label>
        </div>
        <button>Create Routine</button>
      </form>
    </div>
  );
};
export default MyRoutines;
