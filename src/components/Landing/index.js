import React, { Component } from "react";
import "./Landing.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";

import { getAdvice } from "../../services/ad-api";

class Landing extends Component {
  state = {
    advices: [],
    adviceId: null
  };

  getAdvice = () => {
    return this.state.advices;
  };

  handleClick = () => {
    this.componentDidMount();
  };

  async componentDidMount() {
    const adviceData = await getAdvice();
    this.setState({
      advices: adviceData
      // adviceId: adviceData.slip.slip_id
    });
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <h2>Advices</h2>
          <Card>
            <CardContent>
              <div>Advice of the day</div>
              <div className="advice">{this.state.advices}</div>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Button
            onClick={this.handleClick}
            size="small"
            variant="contained"
            color="primary"
          >
            Get new advice
          </Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default Landing;
