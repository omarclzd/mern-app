const express = require("express");
const router = express.Router();
const advicesCtrl = require("../../controllers/advices");

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require("../../config/auth"));
router.post("/create", (req, res) => {
  var postData = req.body;
  connection.query("INSERT SET ?", postData, (error, results, fields) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
