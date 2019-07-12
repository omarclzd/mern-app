import React, { Component } from "react";
import { getAdvice } from "../../services/ad-api";

class Landing extends Component {
  state = {
    advices: []
  };

  getAdvice = id => {
    return this.state.advices[id];
  };

  async componentDidMount() {
    const adviceData = await getAdvice();
    this.setState({
      advices: adviceData.slip.advice
    });
    console.log(adviceData.slip.advice);
  }

  render() {
    return (
      <div>
        <header>Advices</header>
        <div>{this.state.advices}</div>
      </div>
    );
  }
}

export default Landing;
