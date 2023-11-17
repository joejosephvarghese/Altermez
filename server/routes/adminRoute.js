const express = require("express");
const router = express.Router();
const {
  _handleAdminSignup,
  handleAdminLogin
} = require("../controllers/admin-controller/adminController");

//One time use only..
router.route("/").post(_handleAdminSignup);

router.route("/login").post(handleAdminLogin);

module.exports = router