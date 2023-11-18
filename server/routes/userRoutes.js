const express = require("express");

const router = express.Router();
const {
  handleUserSignup,
  handleUserLogin,
  handleVerifyUser,
  handleGetUsers,
} = require("../controllers/user-controller/userController");
const { handleAdminVerify } = require("../utils/middleware/adminVerify");


router.route("/signup").post(handleUserSignup);

router.route("/login").post(handleUserLogin);

router.route("/verify").post(handleVerifyUser);

router.route("/").get(handleAdminVerify, handleGetUsers)

module.exports = router;
