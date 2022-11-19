import React, { useState, useEffect } from "react";
import { updateRoutine } from "../api";
import { useNavigate } from "react-router";

const EditRoutine = (props) => {
  const selectedUserRoutine = props.selectedUserRoutine;
  const [routineID, setRoutineID] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [updatedGoal, setUpdatedGoal] = useState("");
  const [formDetails, setFormDetails] = useState({
    name: "",
    goal: "",
  });
  // const currentUserData = props.currentUserData;

  function handleChange(event) {
    event.preventDefault();
    const toUpdate = event.target.id;
    const update = event.target.value;
    const updatedForm = { ...formDetails, [toUpdate]: update };
    setFormDetails(updatedForm);
  }

  async function submitUpdate() {
    const tempToken = localStorage.getItem("token");
    const placeholder = await updateRoutine(
      updatedName,
      routineID,
      updatedGoal,
      tempToken
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const updatedRoutine = await updateRoutine(formDetails, routineID);
  }

  // const [updateRoutine, setUpdateRoutine] = useState({
  //   name: "",
  //   goal: "",
  //   isPublic: null,
  // });

  // async function handleChange(e) {
  //   e.preventDefault();
  //   const name = e.target.name;
  //   const goal = e.target.goal;
  //   const isPublic = null;
  //   const result = await updateRoutine(name, goal, isPublic);
  //   console.log(result, "banana");
  //   setUpdateRoutine({
  //     ...updateRoutine,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  // // useEffect(() => {
  // //   const fetchUserUpdatedRoutines = async () => {
  // //     const fetchedUpdatedRoutines = await updateRoutine(
  // //       currentUserData.routine.id
  // //     );
  // //     console.log("fetched user routine data", fetchedUpdatedRoutines);
  // //     setUpdateRoutine(fetchedUpdatedRoutines);
  // //   };
  // //   fetchUserUpdatedRoutines();
  // // }, [currentUserData]);

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setUpdateRoutine({ name: "", goal: "", isPublic: null });
  // }

  return (
    <div>
      {selectedUserRoutine && selectedUserRoutine.length
        ? selectedUserRoutine.map((routine) => {
            return (
              <div id="singleRoutine" key={`routine-${routine.id}`}>
                <div>Routine Name: {routine.name}</div>
                <div>Routine Goal: {routine.goal}</div>
                <div>ID: {routine.id}</div>
              </div>
            );
          })
        : null}
      <div>
        <div id="secondForm">
          <h1>Update routine: </h1>
          <input
            type="text"
            required
            value={updatedName}
            placeholder="name"
            onChange={(event) => setUpdatedName(event.target.value)}
          />
          <input
            type="text"
            required
            value={updatedGoal}
            placeholder="goal"
            onChange={(event) => setUpdatedGoal(event.target.value)}
          />
          <h4>Update Privacy</h4>

          <select name="isPublic" onChange={handleChange}>
            <option value={true}>Public</option>
            <option value={false}>Private</option>
          </select>
          <button onClick={() => submitUpdate()}>Submit updated routine</button>
        </div>

        {/* <Link to={`routines/${routines.id}`}>
                <button id="seeDetailsBtn">Back to Account Home</button>
              </Link> */}
      </div>
    </div>
  );
};

export default EditRoutine;
