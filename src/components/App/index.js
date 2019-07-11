import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import HomePage from "../Home";
import SignupPage from "../SignupPage";
import LoginPage from "../LoginPage";
import userService from "../../utils/userService";

import * as ROUTES from "../../constants/routes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation />
            <hr />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.SIGN_UP} component={SignupPage} />
            <Route path={ROUTES.SIGN_IN} component={LoginPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
