import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header" />
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a
            href="https://github.com/omarclzd"
            // eslint-disable-next-line
            target="_blank"
            className="btn btn-dark"
          >
            Github
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
