import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Navigation = (props) => {

  let nav = props.user ?
  <div>
    <ul>
    <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
      <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING} onClick={}>Log Out</Link>
      </li>
    </ul>
    <span>Welcom, {props.user.name}</span>
  </div>
  :
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Log In</Link>
      </li>
    </ul>
  </div>;

  return (
    <div>
      {nav}
    </div>
  );
}


export default Navigation;
