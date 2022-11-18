import React from "react";

const EditRoutine = (props) => {
  const selectedUserRoutine = props.selectedUserRoutine
  console.log("selected user routine", selectedUserRoutine)

  return (
    <div id="selectedRoutine">
        <h1>Edit Routine here</h1>
        { selectedUserRoutine && selectedUserRoutine.length ?
        selectedUserRoutine.map((routine) => {
          return (
            <div id="singleRoutine" key={`routine-${routine.id}`}>
            <div>Routine Name: {routine.name}</div>
          </div>
          )
        })
         : null }
    </div>
  )
};

export default EditRoutine;
