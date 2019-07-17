import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import CommentBox from "../CommentBox/CommentBox";
import Comments from "../Comments/Comments";
import AddDriver from "../AddDriver/AddDriver";
import { Table } from "reactstrap";
import * as ROUTES from "../../constants/routes";
import {
  Container,
  Row,
  Col,
  Toast,
  ToastBody,
  ToastHeader,
  Button
} from "reactstrap";

const Landing = props => {
  let cmtBox = props.user ? (
    <div>
      <div className="p-3 bg-secondary my-2 rounded">
        <Toast className="container">
          <ToastHeader className="text-dark">
            <h6 className="font-weight-bold">Comment on the Reac bellow!</h6>
          </ToastHeader>
          <ToastBody className="text-dark">
            <CommentBox
              handleAddComment={props.handleAddComment}
              user={props.user}
            />
            <Comments comments={props.comments} user={props.user} />
          </ToastBody>
        </Toast>
      </div>
    </div>
  ) : (
    <div>
      <Toast>
        <ToastHeader>Please log in to comment</ToastHeader>
        <ToastBody>
          <Link
            to={ROUTES.SIGN_IN}
            className="btn btn-warning font-weight-bold"
          >
            Log In
          </Link>
        </ToastBody>
      </Toast>
    </div>
  );

  let usr = props.user ? (
    <span className="badge badge-secondary text-warning">
      Welcome {props.user.name}
    </span>
  ) : (
    <span className="badge badge-secondary text-warning">Welcome</span>
  );

  return (
    <Container>
      <Row>
        <Col xs="7">
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>
                <h2>{usr}</h2>
              </ToastHeader>
              <ToastBody>
                Click on the driver's name to see their race stats!
              </ToastBody>
              <ToastBody>
                Or, Click on{" "}
                <Button size="sm" color="danger" className="font-weight-bold">
                  Add Driver
                </Button>{" "}
                to add it to your favorites!{" "}
              </ToastBody>
            </Toast>
          </div>

          {/* <h5>Click on the driver's name to see their race stats!</h5>
          <h5>
            Or, Click on{" "}
            <span className="btn btn-warning text-danger">Add Driver</span> to
            add it to your favorites!{" "}
          </h5> */}
          <Table dark>
            <thead className="thead-dark">
              <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Status</th>
                <th>Add Driver</th>
              </tr>
            </thead>
            {props.advices.map((driver, idx) => (
              <tbody>
                <tr>
                  <td key={driver.position}>{driver.position}</td>
                  <td className="font-weight-bold">
                    <Link
                      className="text-reset danger"
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
          </Table>
        </Col>

        <Col xs="auto" className="center">
          {cmtBox}
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
