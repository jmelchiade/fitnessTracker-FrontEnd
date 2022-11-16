import React, { useEffect } from "react";

const MyRoutines = (props) => {
  const isLogin = props.isLogin;
  return (
    <div>
      <h1>This is My Routines</h1>
      <form>
        <input
          id="createActivityForm"
          className="input"
          type="text"
          name="name"
          placeholder="Routine Name"
        ></input>
        <input
          className="input"
          type="text"
          name="description"
          placeholder="Routine Description"
        ></input>
      </form>
      <button>Create Routine</button>
    </div>
  );
};
export default MyRoutines;
