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
    this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {
      comments: []
    };
  }
  componentWillMount() {
    /* global Ably */
    const channel = Ably.channels.get("comments");

    channel.attach();
    channel.once("attached", () => {
      channel.history((err, page) => {
        /* create a new array with comments */
        const comments = Array.from(page.items, item => item.data);

        this.setState({ comments });

        /* subscribe to new comments */
        channel.subscribe((msg, err) => {
          const commentObject = msg["data"];
          this.handleAddComment(commentObject);
        });
      });
    });
  }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: [comment].concat(prevState.comments)
      };
    });
  }

  render() {
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
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <CommentBox handleAddComment={this.handleAddComment} />
                  <Comments comments={this.state.comments} />
                </div>
              </div>
            </div>
          </section>
        </Container>
      </React.Fragment>
    );
  }
}

export default Landing;
