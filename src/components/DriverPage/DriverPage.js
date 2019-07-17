import React from "react";
import { Link } from "react-router-dom";
import "./DriverPage.css";
import * as ROUTES from "../../constants/routes";
import { Spinner } from "reactstrap";

const DriverPage = props => {
  const driver = props.getAdvice(props.match.params.idx);
  let drp = props.user ? (
    <div className="stats">
      <div className="container">
        <div className="stats">
          {driver ? (
            <div className="stats">
              <div className="card">
                <h2 className="card-title text-center">Driver Info</h2>
                <div className="card-body dark">
                  <p>
                    Name: {driver.Driver.givenName} {driver.Driver.familyName}
                  </p>
                  <p>Number: {driver.number}</p>
                  <p>DOB: {driver.Driver.dateOfBirth}</p>
                  <p>Nationality: {driver.Driver.nationality}</p>
                  <p>Team: {driver.Constructor.name}</p>
                </div>
              </div>

              <div className="card">
                <h2 className="card-title text-center">Driver Race Stats</h2>
                <div className="card-body dark">
                  <p>Starting Position: {driver.grid}</p>
                  <p>Ending Position: {driver.position}</p>
                  <p>Total Laps: {driver.laps}</p>
                  <p>Race Status: {driver.status}</p>
                  <p>Fastest Lap: Lap #{driver.FastestLap.lap}</p>
                  <p>Fastest Lap Time: {driver.FastestLap.Time.time}</p>
                </div>
              </div>

              <Link className="btn btn-warning" to={ROUTES.LANDING}>
                Return
              </Link>
            </div>
          ) : (
            <Spinner style={{ width: "3rem", height: "3rem" }} />
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h2 className="notlogged">
        Please log in to see stats
        <Link to={ROUTES.SIGN_IN} class="badge badge-secondary">
          Log In
        </Link>
      </h2>
    </div>
  );

  return <div>{drp}</div>;
};

export default DriverPage;
