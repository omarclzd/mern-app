const User = require("../models/user");

module.exports = {
  create
};

async function create(req, res) {}

async function advices(req, res) {
  const advices = await Advice.find({}).limit(req.query.limit || 50);
  res.json(advices);
}
