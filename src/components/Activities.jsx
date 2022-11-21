import React, { useState, useEffect } from "react";
// import ViewportList from "react-viewport-list";
import { createActivity } from "../api";

//do we want to add random images to the activities?

const Activities = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const setAllActivities = props.setAllActivities;
  const allActivities = props.allActivities.sort((a, b) => {
    let date1 = new Date(a.createdAt);
    let date2 = new Date(b.createdAt);
    return date2.getTime() - date1.getTime();
  });
  const isLogin = props.isLogin;

  useEffect(() => {
    const getAllActivities = async () => {
      const response = await fetch(
        "http://fitnesstrac-kr.herokuapp.com/api/activities"
      );
      const result = await response.json();
      setAllActivities(result);
    };
    getAllActivities();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await createActivity(name, description);

    if (result.error) {
      const message = result.error;
      setError(message);
    } else {
      setAllActivities([result, ...allActivities]);
    }
    setDescription("");
    setName("");
  }

  return (
    <div id="activity">
      {isLogin === true ? (
        <div>
          <h3>Create new activity</h3>
          <form id="createActivityForm" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              // name="name"
              required
              placeholder="Activity Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="input"
              type="text"
              // name="description"
              required
              placeholder="Activity Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <button id="createActBtn">Create</button>
          </form>
        </div>
      ) : null}
      <br></br>
      <div>
        {error ? (
          <div>
            <h3>{`${error}`}</h3>
          </div>
        ) : null}
      </div>

      {allActivities && allActivities.length
        ? allActivities.map((activity) => {
            return (
              <div id="allActivities" key={`activity-${activity.id}`}>
                <div id="activityName">
                  <b>name: </b>
                  {activity.name}
                </div>
                <div id="activityDes">
                  <b>description:</b> {activity.description}
                </div>
                <br></br>
              </div>
            );
          })
        : null}
      {/* </ViewportList> */}
    </div>
  );
};

export default Activities;
