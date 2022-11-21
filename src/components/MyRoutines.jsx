import React, { useState, useEffect } from "react";
import { createRoutine, getRoutinesByUsername, deleteRoutine } from "../api";
import { useNavigate } from "react-router";
// import {EditRoutine} from "./";

const MyRoutines = (props) => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [userRoutines, setUserRoutines] = useState({});
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  // const [deleteRoutine, setDeleteRoutine] = useState("");
  const [selectedRoutine, setSelectedRoutine] = useState("");

  const setSelectedUserRoutine = props.setSelectedUserRoutine;
  const selectedUserRoutine = props.selectedUserRoutine;
  const isLogin = props.isLogin;
  const allRoutines = props.allRoutines;
  const setAllRoutines = props.setAllRoutines;
  const currentUserData = props.currentUserData;
  // const id = props.id;

  async function handleSubmit(e) {
    e.preventDefault();
    const isPublic = checked;
    console.log(name, goal, isPublic, "form data!!");
    const result = await createRoutine(name, goal, isPublic);
    console.log(result, "Created routine data!");
    setAllRoutines([result, ...allRoutines]);
  }

  async function handleEdit(e) {
    e.preventDefault();
    const toEdit = e.target.id;
    console.log(toEdit, "clicked routine");
    const routineToEdit = userRoutines.filter((routine) => {
      return routine.id == toEdit;
    });
    console.log(routineToEdit, "routine to edit");

    setSelectedUserRoutine(routineToEdit);
    console.log(selectedUserRoutine, "user routine");
    navigate("/edit");

    // const selectedRoutine = routineToEdit[0];
    // setSelectedUserRoutine(selectedRoutine);
  }

  // async function handleDelete(e) {
  //   e.preventDefault();
  //   const toDelete = e.target.id;
  //   console.log(toDelete, "routine id to delete");
  //   const routineToDelete = userRoutines.filter((routine) => {
  //     return routine.id == toDelete;
  //   });
  //   console.log(routineToDelete, "banana");
  //   // const deleted = await deleteRoutine(toDelete, setDeleteRoutine);
  //   setDeleteRoutine(routineToDelete);
  //   console.log(selectedUserRoutine, "deleted banana");
  //   const result = await deleteRoutine(id);
  //   setAllRoutines([result, ...allRoutines]);
  //   // return userRoutines;
  // }

  async function handleDelete(e) {
    e.preventDefault();
    
  }

  useEffect(() => {
    const fetchUserRoutines = async () => {
      const fetchedUserRoutines = await getRoutinesByUsername(
        currentUserData.username
      );
      console.log("fetched user routine data", fetchedUserRoutines);
      setUserRoutines(fetchedUserRoutines);
    };
    fetchUserRoutines();
  }, [currentUserData]);

  return (
    <div>
      <h3>Create a new routine</h3>
      <form onSubmit={handleSubmit}>
        <input
          id="createRoutineForm"
          className="input"
          type="text"
          name="name"
          placeholder="Routine name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className="input"
          type="text"
          name="goal"
          placeholder="Routine goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
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
      <br></br>
      <div id="routines">
        {userRoutines && userRoutines.length
          ? userRoutines.map((routine) => {
              return (
                <div id="myRoutines" key={`routine-${routine.id}`}>
                  <div>
                    <b>Routine Name:</b> {routine.name}
                  </div>
                  <div>
                    <b>Goal: </b>
                    {routine.goal}
                  </div>
                  <div>
                    <b>Creator:</b> {routine.creatorName}
                  </div>
                  <div>
                    {routine.activities && routine.activities.length ? (
                      routine.activities.map((activity) => {
                        return (
                          <div key={`activity-${activity.id}`}>
                            <div>Activity Name: {activity.name}</div>
                            <div>Description: {activity.description} </div>
                            <div>Duration: {activity.duration}</div>
                            <div>Count: {activity.count}</div>
                          </div>
                        );
                      })
                    ) : (
                      <div>No activities found</div>
                    )}
                  </div>
                  <div>
                    <button
                      className="editRoutineButton"
                      id={routine.id ? `${routine.id}` : null}
                      onClick={(e) => {
                        handleEdit(e);
                      }}
                    >
                      Edit Routine
                    </button>
                    <button
                      className="deleteRoutineButton"
                      id={routine.id ? `${routine.id}` : null}
                      onClick={(e) => {
                        handleDelete(e);
                      }}
                    >
                      Delete Routine
                    </button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
export default MyRoutines;
