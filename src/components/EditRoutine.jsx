import React, { useState, useEffect } from "react";
import { updateRoutine } from "../api";
import { useNavigate } from "react-router";

const EditRoutine = (props) => {
  const navigate = useNavigate();
  const selectedUserRoutine = props.selectedUserRoutine;
  const setCurrentUserData = props.setCurrentUserData;
  const [routineID, setRoutineID] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [updatedGoal, setUpdatedGoal] = useState("");
  const [formDetails, setFormDetails] = useState({
    name: "",
    goal: "",
  });
  // const currentUserData = props.currentUserData;

  function handleChange(e) {
    e.preventDefault();
    const toUpdate = e.target.id;
    const update = e.target.value;
    const updatedForm = { ...formDetails, [toUpdate]: update };
    setFormDetails(updatedForm);
  }

  async function submitUpdate() {
    const tempToken = localStorage.getItem("token");
    const setCurrentUserData = await updateRoutine(
      updatedName,
      routineID,
      updatedGoal,
      tempToken
    );
    navigate("/myroutines");
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   const updatedRoutine = await updateRoutine(formDetails, routine.id);
  // }

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
            placeholder="insert name"
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            required
            value={updatedGoal}
            placeholder="insert goal"
            onChange={(e) => setUpdatedGoal(e.target.value)}
          />
          <h4>Update Privacy</h4>

          <select name="isPublic" onChange={handleChange}>
            <option value={true}>Public</option>
            <option value={false}>Private</option>
          </select>
          <button onClick={() => submitUpdate()}>Submit updated routine</button>
        </div>
      </div>
      {/* <div>
        <button
          className="deleteButton"
          id={routine.id ? `${routine.id}` : null}
          onClick={(event) => {
            handleDelete(event);
          }}
        >
          Delete Routine
        </button>
      </div> */}
    </div>
  );
};
{
  /* <Link to={`routines/${routines.id}`}>
                <button id="seeDetailsBtn">Back to Account Home</button>
              </Link> */
}
export default EditRoutine;
