import React, { useEffect } from "react";

const Routines = (props) => {
  const isLogin = props.isLogin;
  const allRoutines = props.allRoutines;
  const setAllRoutines = props.setAllRoutines;

  useEffect(() => {
    const getAllRoutines = async () => {
      const response = await fetch(
        "http://fitnesstrac-kr.herokuapp.com/api/routines"
      );
      const result = await response.json();
      // console.log(result, "this is all routines result");
      setAllRoutines(result);
    };
    getAllRoutines();
  }, []);

  return (
    <div id="routines">
      {allRoutines && allRoutines.length
        ? allRoutines.map((routine) => {
            return (
              <div id="allRoutines" key={`routine-${routine.id}`}>
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
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Routines;
