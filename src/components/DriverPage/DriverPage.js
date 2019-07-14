import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const DriverPage = props => {
  const driver = props.getAdvice(props.match.params.idx);

  return (
    <div>
      {driver ? (
        <div>
          <div>
            <h2>Driver Info</h2>
            <div>
              Name: {driver.Driver.givenName} {driver.Driver.familyName}
            </div>
            <div>Number: {driver.number}</div>
            <div>DOB: {driver.Driver.dateOfBirth}</div>
            <div>Nationality: {driver.Driver.nationality}</div>
            <div>Team: {driver.Constructor.name}</div>
            <div>Number: {driver.number}</div>
          </div>
          <h2>Driver's Race Stats</h2>
          <div>Grid Position: {driver.grid}</div>
          <div />
          <Link to={ROUTES.LANDING}>Return</Link>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default DriverPage;
