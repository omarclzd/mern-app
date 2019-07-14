import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const DriverPage = props => {
  const driver = props.getAdvice(props.match.params.idx);
  let drp = props.user ? (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
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
                </div>
                <h2>Driver's Race Stats</h2>
                <div>Starting Position: {driver.grid}</div>
                <div>Ending Position: {driver.position}</div>
                <div>Total Laps: {driver.laps}</div>
                <div>Race Status: {driver.status}</div>
                <div>Fastest Lap: Lap #{driver.FastestLap.lap}</div>
                <div>Fastest Lap Time: {driver.FastestLap.Time.time}</div>
                <div />
                <Link to={ROUTES.LANDING}>Return</Link>
              </div>
            ) : (
              <h3>Loading...</h3>
            )}
          </div>
        </Container>
      </React.Fragment>
    </div>
  ) : (
    <div>
      <h2>Please Log In to see stats</h2>
    </div>
  );

  return <div>{drp}</div>;
};

export default DriverPage;
