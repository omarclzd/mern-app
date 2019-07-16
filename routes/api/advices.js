const express = require("express");
const router = express.Router();
const advicesCtrl = require("../../controllers/advices");

/*---------- Public Routes ----------*/
router.post("/create", advicesCtrl.createDriver);
router.post("/all", advicesCtrl.getAllDrivers);
/*---------- Protected Routes ----------*/
// router.use(require("../../config/auth"));

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
