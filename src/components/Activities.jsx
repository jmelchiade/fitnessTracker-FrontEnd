import React, { useState, useEffect } from "react";
import { createActivity } from "../api";

const Activities = (props) => {
  const setAllActivities = props.setAllActivities;
  const allActivities = props.allActivities;
  const isLogin = props.isLogin;

  useEffect(() => {
    const getAllActivities = async () => {
      const response = await fetch(
        "http://fitnesstrac-kr.herokuapp.com/api/activities"
      );
      const result = await response.json();
      // console.log(result, "this is activities result");
      setAllActivities(result);
    };
    getAllActivities();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const description = e.target[1].value;
    const result = await createActivity(name, description);
    console.log(result, "Created activity!");
    setAllActivities([result, ...allActivities])
    //update the state here to include created activity-do same in routines
  }

  return (
    <div id="activity">
      {isLogin === true ? (
        <form onSubmit={handleSubmit}>
          <input
            id="createActivityForm"
            className="input"
            type="text"
            name="name"
            placeholder="Activity Name"
          ></input>
          <input
            className="input"
            type="text"
            name="description"
            placeholder="Activity Description"
          ></input>
          <button id="createActBtn">Create</button>
        </form>
      ) : null}

      {allActivities && allActivities.length
        ? allActivities.map((activity) => {
            return (
              <div id="allActivities" key={`activity-${activity.id}`}>
                <div id="activityName"> name: {activity.name}</div>
                <div id="activityDes"> description: {activity.description}</div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Activities;
