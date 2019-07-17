import React from "react";
import { Button } from "reactstrap";

const AddDriver = props => {
  return (
    <Button
      className="text-danger"
      color="warning"
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
    </Button>
  );
};

export default AddDriver;
