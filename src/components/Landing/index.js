import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import CommentBox from "../CommentBox/CommentBox";
import Comments from "../Comments/Comments";
import AddDriver from "../AddDriver/AddDriver";
import * as ROUTES from "../../constants/routes";

const Landing = props => {
  let cmtBox = props.user ? (
    <div className="cmb">
      <section className="section">
        <div>
          <CommentBox
            handleAddComment={props.handleAddComment}
            user={props.user}
          />
          <Comments comments={props.comments} user={props.user} />
        </div>
      </section>
    </div>
  ) : (
    <div>
      <p>
        Please log in to comment
        <Link to={ROUTES.SIGN_IN} class="badge badge-secondary">
          Log In
        </Link>
      </p>
    </div>
  );

  return (
    <div className="main">
      <div className="row">
        <div className="col-8">
          <h2>Results</h2>
          <h5>Click on the driver's name to see their race stats!</h5>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Status</th>
                <th>Button</th>
              </tr>
            </thead>
            {props.advices.map((driver, idx) => (
              <tbody>
                <tr>
                  <td key={driver.position}>{driver.position}</td>
                  <td>
                    <Link
                      color="inherit"
                      to={`/driver/${idx}`}
                      key={driver.Driver.familyName}
                    >
                      {driver.Driver.familyName}
                    </Link>
                  </td>
                  <td key={driver.Constructor.name}>
                    {driver.Constructor.name}
                  </td>
                  <td key={driver.status}>{driver.status}</td>
                  <td>
                    <AddDriver
                      user={props.user}
                      driver={driver}
                      handleAddDriver={props.handleAddDriver}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="col-sm bg-dark ">{cmtBox}</div>
      </div>
    </div>
  );
};

export default Landing;
