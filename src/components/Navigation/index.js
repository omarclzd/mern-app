import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap"
  },
  paper: {
    padding: theme.spacing(1, 2)
  }
}));

const Navigation = props => {
  const classes = useStyles();
  let nav = props.user ? (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs aria-label="Breadcrumb">
          <Link color="inherit" to={ROUTES.LANDING}>
            Landing
          </Link>

          <Link color="inherit" to={ROUTES.HOME}>
            Home
          </Link>
          <Link to={ROUTES.LANDING} onClick={props.handleLogout}>
            Log Out
          </Link>
        </Breadcrumbs>
      </Paper>
      <span>Welcom, {props.user.name}</span>
    </div>
  ) : (
    // <div>
    //   <ul>
    //     <li>
    //       <Link to={ROUTES.LANDING}>Landing</Link>
    //     </li>
    //     <li>
    //       <Link to={ROUTES.HOME}>Home</Link>
    //     </li>
    //     <li>
    //       <Link to={ROUTES.LANDING} onClick={props.handleLogout}>
    //         Log Out
    //       </Link>
    //     </li>
    //   </ul>
    //   <span>Welcom, {props.user.name}</span>
    // </div>
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs aria-label="Breadcrumb">
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
        </Breadcrumbs>
      </Paper>
    </div>
  );

  return <div>{nav}</div>;
};

export default Navigation;
