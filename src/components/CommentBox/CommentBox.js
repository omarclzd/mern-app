import React, { Component } from "react";

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
        <h4 className="">Comment on the race below!</h4>
        <form onSubmit={this.addComment}>
          <div className="form-group">
            <div>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.props.user.name}
                disabled
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <textarea
                className="textarea"
                name="comment"
                placeholder="Add a comment"
              />
            </div>
          </div>
          <div>
            <div className="cmb">
              <button className="btn btn-warning">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;
