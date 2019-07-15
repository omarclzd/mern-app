import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import CommentBox from "../CommentBox/CommentBox";
import Comments from "../Comments/Comments";

// class Landing extends Component {
//   constructor(props) {
//     super(props);
// this.handleAddComment = this.handleAddComment.bind(this);
//   this.state = {};
// }

// componentDidUpdate() {
//   /* global Ably */
//   const channel = Ably.channels.get("comments");

//   channel.attach();
//   channel.once("attached", () => {
//     channel.history((err, page) => {
//       const comments = Array.from(page.items, item => item.data);

//       this.setState({ comments });

//       channel.subscribe((msg, err) => {
//         const commentObject = msg["data"];
//         this.handleAddComment(commentObject);
//       });
//     });
//   });
// }

// handleAddComment(comment) {
//   this.setState(prevState => {
//     return {
//       comments: [comment].concat(prevState.comments)
//     };
//   });
// }
const Landing = props => {
  let cmtBox = props.user ? (
    <div className="cmb">
      <section className="section">
        <div>
          <div className="columns">
            <div>
              <CommentBox
                handleAddComment={props.handleAddComment}
                user={props.user}
              />
              <Comments comments={props.comments} user={props.user} />
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <div>
      <p>Please log in to leave a comment</p>
    </div>
  );

  return (
    <div className="main">
      <div className="row">
        <div className="col-8">
          <h2>Results</h2>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Status</th>
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
