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
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
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
    <div className="">
      <div className="row">
        <div className="col-8">
          <h2>Results</h2>
          <ol>
            {props.advices.map((driver, idx) => (
              <li>
                <Link
                  color="inherit"
                  to={`/driver/${idx}`}
                  key={driver.Driver.familyName}
                >
                  {driver.Driver.familyName}
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <div className="col-sm bg-dark ">{cmtBox}</div>
      </div>
    </div>
  );
};

export default Landing;
