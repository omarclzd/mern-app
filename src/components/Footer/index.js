import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div class="card text-center">
        <div class="card-header" />
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a
            href="https://github.com/omarclzd"
            target="_blank"
            class="btn btn-dark"
          >
            Github
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
