import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import HomePage from "../Home";
import SignupPage from "../SignupPage";
import LoginPage from "../LoginPage";
import userService from "../../utils/userService";
import { getAdvice } from "../../services/ad-api";

import * as ROUTES from "../../constants/routes";
import DriverPage from "../DriverPage/DriverPage";
import Footer from "../Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {
      user: userService.getUser(),
      advices: [],
      comments: []
    };
  }

  getAdvice = idx => {
    return this.state.advices[idx];
  };

  async componentDidMount() {
    const adviceData = await getAdvice();
    /* global Ably */
    const channel = Ably.channels.get("comments");
    channel.attach();
    channel.once("attached", () => {
      channel.history((err, page) => {
        const comments = Array.from(page.items, item => item.data);

        this.setState({
          comments,
          advices: adviceData.MRData.RaceTable.Races[0].Results
        });

        channel.subscribe((msg, err) => {
          const commentObject = msg["data"];
          this.handleAddComment(commentObject);
        });
      });
    });

    // this.setState({
    //   advices: adviceData.MRData.RaceTable.Races[0].Results
    // });
    console.log(this.state);
  }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: [comment].concat(prevState.comments)
      };
    });
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
          <div>
            <Navigation
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          </div>

          <Route
            exact
            path={ROUTES.LANDING}
            render={({ history }) => (
              <LandingPage
                history={history}
                advices={this.state.advices}
                getAdvice={this.getAdvice}
                comments={this.state.comments}
                handleAddComment={this.handleAddComment}
                user={this.state.user}
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
            path={ROUTES.DRIVER}
            render={props => (
              <DriverPage
                {...props}
                user={this.state.user}
                getAdvice={this.getAdvice}
              />
            )}
          />
          <div>
            <Footer handleLogout={this.handleLogout} user={this.state.user} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
