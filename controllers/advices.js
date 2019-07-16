const User = require("../models/user");

module.exports = {
  createDriver,
  getAllDrivers
};

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

    person.save(() => {
      res.status(201).json(driver);
    });
  });
}

function getAllDrivers(req, res) {
  User.findById(req.body._id).then(person => {
    res.status(200).json(person.advices);
  });
}
