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

  handleAddDriver = (name, start, finish, laps, status, fastest, lapTime) => {
    const { user } = this.state;
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        user,
        start,
        finish,
        laps,
        status,
        fastest,
        lapTime
      })
    };
    async function createDriver(options) {
      try {
        const sendPost = await fetch("/api/advices/create", options);
        const postResults = await sendPost.json();
        return await postResults;
      } catch (error) {
        console.log(error);
      }
    }

    createDriver(options).then(results => {
      console.log("sup");
    });
  };

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

          <br />

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
                handleAddDriver={this.handleAddDriver}
              />
            )}
          />
          <Route
            path={ROUTES.HOME}
            render={props => <HomePage {...props} user={this.state.user} />}
          />
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
