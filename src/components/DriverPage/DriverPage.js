import React from "react";
import { Link } from "react-router-dom";
import "./DriverPage.css";
import * as ROUTES from "../../constants/routes";

const DriverPage = props => {
  const driver = props.getAdvice(props.match.params.idx);
  let drp = props.user ? (
    <div className="stats">
      <div className="container">
        <div className="stats">
          {driver ? (
            <div className="stats">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="https://i.imgur.com/lS95joQ.jpg"
                      className="card-img"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <h2 className="card-title text-center">Driver Info</h2>
                    <div className="card-body">
                      <p>
                        Name: {driver.Driver.givenName}{" "}
                        {driver.Driver.familyName}
                      </p>
                      <p>Number: {driver.number}</p>
                      <p>DOB: {driver.Driver.dateOfBirth}</p>
                      <p>Nationality: {driver.Driver.nationality}</p>
                      <p>Team: {driver.Constructor.name}</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2>Driver's Race Stats</h2>
              <p>Starting Position: {driver.grid}</p>
              <p>Ending Position: {driver.position}</p>
              <p>Total Laps: {driver.laps}</p>
              <p>Race Status: {driver.status}</p>
              <p>Fastest Lap: Lap #{driver.FastestLap.lap}</p>
              <p>Fastest Lap Time: {driver.FastestLap.Time.time}</p>
              <div />
              <Link to={ROUTES.LANDING}>Return</Link>
            </div>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h2>Please Log In to see stats</h2>
    </div>
  );

  return <div>{drp}</div>;
};

export default DriverPage;
