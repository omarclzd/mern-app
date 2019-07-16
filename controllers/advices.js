const User = require("../models/user");

module.exports = {
  createDriver,
  getAllDrivers,
  deleteDriver
};

function deleteDriver(req, res) {
  const userId = req.body.user._id;
  const driverId = req.body._id;
  User.findById(userId).then(person => {
    const driver = person.advices.id(driverId);
    person.advices.remove(driver);
    person.save(() => {
      res.status(201).json(req.body.driverIdx);
    });
  });
}

function createDriver(req, res) {
  console.log(req.body);
  let id = req.body.user._id;
  let name = req.body.name;
  let start = req.body.start;
  let finish = req.body.finish;
  let laps = req.body.laps;
  let status = req.body.status;
  let fastest = req.body.fastest;
  let lapTime = req.body.lapTime;
  console.log(name, start, finish, laps, status, fastest, lapTime, id);
  User.findById(id).then(person => {
    let driver = {
      advice: name,
      start: start,
      finish: finish,
      laps: laps,
      status: status,
      fastestLap: fastest,
      fastestLapTime: lapTime
    };
    person.advices.push(driver);
    console.log(driver);
    person.save(() => {
      res.status(201).json(driver);
    });
  });
}

function getAllDrivers(req, res) {
  User.findById(req.body._id).then(person => {
    console.log(person.advices);
    res.status(200).json(person.advices);
  });
}
