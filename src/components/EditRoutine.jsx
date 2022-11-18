import React, { useState, useEffect } from "react";
import { updateRoutine } from "../api";

const EditRoutine = (props) => {
  const selectedUserRoutine = props.selectedUserRoutine;
  const currentUserData = props.currentUserData;

  const [updateRoutine, setUpdateRoutine] = useState({
    name: "",
    goal: "",
    isPublic: null,
  });

  async function handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const goal = e.target.goal;
    const isPublic = null;
    const result = await updateRoutine(name, goal, isPublic);
    console.log(result, "banana");
    setUpdateRoutine({
      ...updateRoutine,
      [e.target.name]: e.target.value,
    });
  }

  // useEffect(() => {
  //   const fetchUserUpdatedRoutines = async () => {
  //     const fetchedUpdatedRoutines = await updateRoutine(
  //       currentUserData.routine.id
  //     );
  //     console.log("fetched user routine data", fetchedUpdatedRoutines);
  //     setUpdateRoutine(fetchedUpdatedRoutines);
  //   };
  //   fetchUserUpdatedRoutines();
  // }, [currentUserData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUpdateRoutine({ name: "", goal: "", isPublic: null });
  };

  return (
    <div>
      <h1>Update routines</h1>
      {selectedUserRoutine && selectedUserRoutine.length
        ? selectedUserRoutine.map((routine) => {
            return (
              <div id="singleRoutine" key={`routine-${routine.id}`}>
                <div>Routine Name: {routine.name}</div>
                <div>Routine Goal: {routine.goal}</div>
              </div>
            );
          })
        : null}
      <div>
        <form onSubmit={handleSubmit}>
          <label>Edit Name:</label>
          <input
            type="text"
            placeholder="Routine name"
            onChange={handleChange}
            required
          ></input>
          <label>Edit Goal:</label>
          <input
            type="text"
            placeholder="Routine goal"
            onChange={handleChange}
            required
          ></input>
          <div></div>
          <label htmlFor="isPublic">Set Privacy</label>
          <select name="isPublic" onChange={handleChange}>
            <option value={true}>Public</option>
            <option value={false}>Private</option>
          </select>
          <button>Submit changes</button>
        </form>

        {/* <Link to={`routines/${routines.id}`}>
                <button>Back to Account Home</button>
              </Link> */}
      </div>
    </div>
  );
};

export default EditRoutine;
