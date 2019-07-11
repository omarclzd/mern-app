import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Route, Switch, Redirect } from "react-router-dom";

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

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div>
        <Router>
          <Navigation handleLogout={this.handleLogout} user={this.state.user} />
          <hr />

          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route
            exact
            path={ROUTES.SIGN_UP}
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path={ROUTES.SIGN_IN}
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
