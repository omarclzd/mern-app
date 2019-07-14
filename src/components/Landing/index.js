import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const Landing = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <h2>Results</h2>

        <section>
          <ol>
            {props.advices.map((driver, idx) => (
              <li>
                <Link
                  color="inherit"
                  to={`/driver/${idx}`}
                  key={driver.Driver.familyName}
                >
                  {driver.Driver.familyName}
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default Landing;
