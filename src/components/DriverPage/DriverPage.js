import React from "react";
import { Link } from "react-router-dom";
import "./DriverPage.css";
import * as ROUTES from "../../constants/routes";
import { Spinner, Toast, ToastBody, ToastHeader, Col } from "reactstrap";

const DriverPage = props => {
  const driver = props.getAdvice(props.match.params.idx);
  let drp = props.user ? (
    <div className="stats">
      <div>
        <div className="stats">
          {driver ? (
            <div className="container">
              <div className="row">
                <Col xs="6">
                  <Toast className="container">
                    <ToastHeader>
                      <h2 className="card-title text-center">Driver Info</h2>
                    </ToastHeader>
                    <ToastBody>
                      <p>
                        Name: {driver.Driver.givenName}{" "}
                        {driver.Driver.familyName}
                      </p>
                      <p>Number: {driver.number}</p>
                      <p>DOB: {driver.Driver.dateOfBirth}</p>
                      <p>Nationality: {driver.Driver.nationality}</p>
                      <p>Team: {driver.Constructor.name}</p>
                    </ToastBody>
                  </Toast>
                </Col>

                <Col xs="auto">
                  <Toast className="container">
                    <ToastHeader>
                      <h2 className="card-title text-center">Race Stats</h2>
                    </ToastHeader>
                    <ToastBody>
                      <p>Starting Position: {driver.grid}</p>
                      <p>Ending Position: {driver.position}</p>
                      <p>Total Laps: {driver.laps}</p>
                      <p>Race Status: {driver.status}</p>
                      <p>Fastest Lap: Lap #{driver.FastestLap.lap}</p>
                      <p>Fastest Lap Time: {driver.FastestLap.Time.time}</p>
                    </ToastBody>
                  </Toast>
                  <Link className="btn btn-warning" to={ROUTES.LANDING}>
                    Return
                  </Link>
                </Col>
              </div>
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
