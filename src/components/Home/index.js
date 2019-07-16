import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drivers: []
    };
  }

  componentDidMount() {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.props.user)
    };

    getDrivers(options).then(results =>
      this.setState({
        drivers: results
      })
    );
  }

  render() {
    let map = this.state.drivers.map((driver, idx) => {
      return (
        <div>
          <ul>
            <li>{driver.advice}</li>
            <li>{driver.start}</li>
            <li>{driver.finish}</li>
            <li>{driver.laps}</li>
            <li>{driver.status}</li>
            <li>{driver.fastestLap}</li>
            <li>{driver.fastestLapTime}</li>
          </ul>
        </div>
      );
    });
    return (
      <div>
        <p>hello</p>

        <p>{map}</p>
      </div>
    );
  }
}

export default Home;

async function getDrivers(options) {
  try {
    const fetchDrivers = await fetch("/api/advices/all", options);
    const data = await fetchDrivers.json();

    return await data;
  } catch (error) {
    console.log(error);
  }
}
