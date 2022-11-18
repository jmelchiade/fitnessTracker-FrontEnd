import React, { useState, useEffect } from "react";
import { createRoutine, getRoutinesByUsername } from "../api";

const MyRoutines = (props) => {
  const isLogin = props.isLogin;
  const allRoutines = props.allRoutines;

  const setAllRoutines = props.setAllRoutines;
  const [checked, setChecked] = useState(false);
  const [userRoutines, setUserRoutines] = useState({});
  const [selectedUserRoutine, setSelectedUserRoutine] = useState({});

  const currentUserData = props.currentUserData;

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

  async function handleEdit(e) {
    e.preventDefault();
    const toEdit = e.target.id;
    console.log(toEdit, "clicked routine");
    const routineToEdit = userRoutines.filter((routine) => {
      return routine.id == toEdit;
    });
    const selectedRoutine = routineToEdit[0];
    console.log(selectedRoutine, "edit routine");
    setSelectedUserRoutine(selectedRoutine);
    console.log(selectedUserRoutine, "user routine");
  }

  useEffect(() => {
    const fetchUserRoutines = async () => {
      const fetchedUserRoutines = await getRoutinesByUsername(
        currentUserData.username
      );
      console.log("fetched user routine data", fetchUserRoutines);
      setUserRoutines(fetchedUserRoutines);
    };
    fetchUserRoutines();
  }, [currentUserData]);

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
      <div id="routines">
        {userRoutines && userRoutines.length
          ? userRoutines.map((routine) => {
              return (
                <div id="myRoutines" key={`routine-${routine.id}`}>
                  <div>Routine Name: {routine.name}</div>
                  <div>Goal: {routine.goal}</div>
                  <div>Creator: {routine.creatorName}</div>
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
