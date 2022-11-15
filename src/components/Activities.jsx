import React, { useState, useEffect } from "react";
import { getAllActivities } from "../api";

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);

  useEffect(() => {
    // const options = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    const getAllActivities = async () => {
      const response = await fetch(
        "http://fitnesstrac-kr.herokuapp.com/api/activities"
      );
      const result = await response.json();
      console.log(result, "this is activities result");
      // const activityData = result.map((activity) => {});
      setAllActivities(result);
    };
    getAllActivities();
  }, []);

  // const activityData = getAllActivities();
  // setAllActivities(activityData);
  // console.log(allActivities, "apple!");
  return (
    <div></div>
    // <div id="activities">
    //   {allActivities.map((activity, index) => {
    //     <div key={`activity-${activity.id}`}>
    //       <div> name: {activity.name}</div>
    //       <div> description: {activity.description}</div>
    //     </div>;
    //   })}
    // </div>
  );
};

export default Activities;
