import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import HomePage from "../Home";
import SignupPage from "../SignupPage";
import LoginPage from "../LoginPage";
import userService from "../../utils/userService";
import { getAdvice } from "../../services/ad-api";

import * as ROUTES from "../../constants/routes";
import DriverPage from "../DriverPage/DriverPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      advices: []
    };
  }

  getAdvice = idx => {
    return this.state.advices[idx];
  };

  async componentDidMount() {
    const adviceData = await getAdvice();
    this.setState({
      advices: adviceData.MRData.RaceTable.Races[0].Results
    });
    console.log(this.state.advices);
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

          <Route
            exact
            path={ROUTES.LANDING}
            render={({ history }) => (
              <LandingPage
                history={history}
                advices={this.state.advices}
                getAdvice={this.getAdvice}
              />
            )}
          />
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
          <Route
            exact
            path={ROUTES.DRIVER}
            render={props => (
              <DriverPage {...props} getAdvice={this.getAdvice} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
