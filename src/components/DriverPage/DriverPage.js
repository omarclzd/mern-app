import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const DriverPage = props => {
  const driver = props.getAdvice(props.match.params.idx);

  return (
    <div>
      {driver ? (
        <div>
          <div>
            Name: {driver.Driver.givenName} {driver.Driver.familyName}
          </div>
          <div>Number: {driver.number}</div>
          <div>DOB: {driver.Driver.dateOfBirth}</div>
          <div>Nationality: {driver.Driver.nationality}</div>
          <div>Team: {driver.Constructor.name}</div>
          <Link to={ROUTES.LANDING}>Return</Link>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default DriverPage;
