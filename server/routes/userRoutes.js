const express = require("express");

const router = express.Router();
const {
  handleUserSignup,
  handleUserLogin,
  handleVerifyUser,
} = require("../controllers/user-controller/userController");


router.route("/signup").post(handleUserSignup);

router.route("/login").post(handleUserLogin);

router.route("/verify").post(handleVerifyUser);

module.exports = router;
