import React from "react";

const AddDriver = props => {
  console.log(props.driver.Driver.familyName);
  return (
    <button
      onClick={() =>
        props.handleAddDriver(
          props.driver.Driver.familyName,
          props.driver.grid,
          props.driver.position,
          props.driver.laps,
          props.driver.status,
          props.driver.FastestLap.lap,
          props.driver.FastestLap.Time.time
        )
      }
    >
      Add Adriver
    </button>
  );
};

export default AddDriver;
