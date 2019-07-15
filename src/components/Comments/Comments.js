import React, { Component } from "react";
import Comment from "../Comment/Comment";

class Comments extends Component {
  render() {
    return (
      <section className="section">
        {this.props.comments.map((comment, index) => {
          return (
            <Comment key={index} comment={comment} user={this.props.user} />
          );
        })}
      </section>
    );
  }
}

export default Comments;
