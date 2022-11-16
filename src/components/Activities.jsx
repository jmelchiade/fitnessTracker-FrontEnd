import React, { useState, useEffect } from "react";
import { getAllActivities } from "../api";

const Activities = (props) => {
  const [allActivities, setAllActivities] = useState([]);
  const [queryActivity, setQueryActivity] = useState("");

  useEffect(() => {
    const getAllActivities = async () => {
      const response = await fetch(
        "http://fitnesstrac-kr.herokuapp.com/api/activities"
      );
      const result = await response.json();
      console.log(result, "this is activities result");
      setAllActivities(result);
    };
    getAllActivities();
  }, []);

  // const activities = props.activities
  // const onSearch=() => {
  //   const filteredSearch = activities.filter((activities) => activity.name.toLowerCase().includes(queryActivity.toLowerCase()))
  //   props.setFilteredActivities(filteredSearch)
  // }

  return (
    <div id="activity">
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
