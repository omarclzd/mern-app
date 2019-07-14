import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import CommentBox from "../CommentBox/CommentBox";
import Comments from "../Comments/Comments";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

class Landing extends Component {
  constructor(props) {
    super(props);
    // this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {};
  }

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

  render() {
    let cmtBox = this.props.user ? (
      <div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <CommentBox
                  handleAddComment={this.props.handleAddComment}
                  user={this.props.user}
                />
                <Comments
                  comments={this.props.comments}
                  user={this.props.user}
                />
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
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <h2>Results</h2>

          <section>
            <ol>
              {this.props.advices.map((driver, idx) => (
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
          </section>

          <div>{cmtBox}</div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Landing;
