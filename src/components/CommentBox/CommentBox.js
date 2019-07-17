import React, { Component } from "react";

import { Form, FormGroup, Input } from "reactstrap";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
  }

  addComment(e) {
    e.preventDefault();
    const comment = e.target.elements.comment.value.trim();
    const name = e.target.elements.name.value.trim();
    if (name && comment) {
      const commentObject = { name, comment };
      /*global Ably*/
      const channel = Ably.channels.get("comments");
      channel.publish("add_comment", commentObject, err => {
        if (err) {
          console.log("Unable to publish message; err = " + err.message);
        }
      });
      e.target.elements.comment.value = "";
      // e.target.elements.name.value = "";
    }
  }

  render() {
    return (
      <div className="cmb">
        <Form onSubmit={this.addComment}>
          <FormGroup row>
            <div>
              <Input
                type="text"
                className="form-control"
                name="name"
                value={this.props.user.name}
                disabled
              />
            </div>
          </FormGroup>
          <FormGroup row>
            <div>
              <Input
                type="textarea"
                className="textarea"
                name="comment"
                placeholder="Add a comment"
              />
            </div>
          </FormGroup>
          <div>
            <div className="cmb">
              <button className="btn btn-warning">Submit</button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default CommentBox;
