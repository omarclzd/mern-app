import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./Navigation.css";

const Navigation = props => {
  let nav = props.user ? (
    <div>
      <nav className="navbar justify-content-center">
        <Link className="text-reset text-decoration-none" to={ROUTES.LANDING}>
          Landing
        </Link>

        <Link
          className="text-reset text-decoration-none"
          color="inherit"
          to={ROUTES.HOME}
        >
          Home
        </Link>
        <Link
          className="text-reset text-decoration-none"
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
      <nav className="navbar justify-content-center">
        <Link
          className="text-reset text-decoration-none"
          color="inherit"
          to={ROUTES.LANDING}
        >
          Landing
        </Link>

        <Link
          className="text-reset text-decoration-none"
          color="inherit"
          to={ROUTES.HOME}
        >
          Home
        </Link>

        <Link
          className="text-reset text-decoration-none"
          color="inherit"
          to={ROUTES.SIGN_UP}
        >
          Sign Up
        </Link>

        <Link
          className="text-reset text-decoration-none"
          color="inherit"
          to={ROUTES.SIGN_IN}
        >
          Log In
        </Link>
      </nav>
    </div>
  );

  return <div>{nav}</div>;
};

export default Navigation;
