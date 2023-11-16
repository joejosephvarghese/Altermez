const express = require("express");

const {
  handleUserSignup,
  handleUserLogin,
  handleVerifyUser,
} = require("../controllers/user-controller/userController");

const router = express.Router();

router.route("/signup").post(handleUserSignup);

router.route("/login").post(handleUserLogin);

router.route("/verify").post(handleVerifyUser);

module.exports = router;
