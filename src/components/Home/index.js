import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drivers: []
    };
  }

  handleDeleteDriver = (driverIdx, user, _id) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ driverIdx: driverIdx, _id: _id, user })
    };

    deleteDrivers(options).then(result => {
      const newStateArray = this.state.drivers.filter(
        (elem, idx) => idx !== result
      );
      this.setState({ drivers: newStateArray });
    });
  };

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
        <div className="card">
          <h2 className="card-title text-center">{driver.advice}</h2>
          <div className="card-body dark">
            <p>Starting Position: {driver.start}</p>
            <p>Ending Position: {driver.finish}</p>
            <p>Laps: {driver.laps}</p>
            <p>Race Status: {driver.status}</p>
            <p>Fastest Lap: {driver.fastestLap}</p>
            <p>Fastest Lap Time: {driver.fastestLapTime}</p>
            <button onClick="" className="btn btn-dark text-warning">
              Delete
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
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

async function deleteDrivers(options) {
  try {
    const deleteDrivers = await fetch("/api/advices/deleteDriver", options);
    const data = await deleteDrivers.json();
    return await data;
  } catch (error) {
    console.log(error);
  }
}
