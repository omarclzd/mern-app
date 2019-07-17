import React from "react";
import { Button } from "reactstrap";

const AddDriver = props => {
  return (
    <Button
      size="sm"
      className="font-weight-bold"
      color="danger"
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
      Add Driver
    </Button>
  );
};

export default AddDriver;
