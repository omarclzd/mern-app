import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import HomePage from "../Home";
import SignupPage from "../SignupPage";

import * as ROUTES from "../../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_UP} component={SignupPage} />
    </div>
  </Router>
);

export default App;
