const express = require("express");
const {
  handleUserSignup,
} = require("../controllers/user-controller/userController");
const router = express.Router();

router.route("/signup").post(handleUserSignup);


module.exports = router;
