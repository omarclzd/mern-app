import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./Navigation.css";

const Navigation = props => {
  let nav = props.user ? (
    <div>
      <nav className="navbar navbar-dark justify-content-center">
        <Link className="nav-item" to={ROUTES.LANDING}>
          Landing
        </Link>

        <Link className="nav-item" color="inherit" to={ROUTES.HOME}>
          Home
        </Link>
        <Link
          className="nav-item"
          to={ROUTES.LANDING}
          onClick={props.handleLogout}
        >
          Log Out
        </Link>

        <span>Welcom, {props.user.name}</span>
      </nav>
    </div>
  ) : (
    <div>
      <nav className="navbar navbar-dark justify-content-center">
        <Link color="inherit" to={ROUTES.LANDING}>
          Landing
        </Link>

        <Link color="inherit" to={ROUTES.HOME}>
          Home
        </Link>

        <Link color="inherit" to={ROUTES.SIGN_UP}>
          Sign Up
        </Link>

        <Link color="inherit" to={ROUTES.SIGN_IN}>
          Log In
        </Link>
      </nav>
    </div>
  );

  return <div>{nav}</div>;
};

export default Navigation;
