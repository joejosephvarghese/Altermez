const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../../database/models/adminModel");
const AppError = require("../../utils/error-class/AppError");
const Config = require("../../utils/constants");
const HttpStatusCode = require("../../utils/httpStatusCodes");

const handleAdminLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      const error = new AppError(
        "Invalid credential..",
        HttpStatusCode.UNAUTHORIZED
      );
      return next(error);
    }
    const isCompare = await bcrypt.compare(password, admin.password);
    if (!isCompare) {
      const error = new AppError(
        "Invalid credential..",
        HttpStatusCode.UNAUTHORIZED
      );
      return next(error);
    }
    const payload = { id: admin._id, isAdmin: admin.isAdmin };
    const token = jwt.sign(payload, Config.JWT_SECRET);
    return res
      .status(HttpStatusCode.OK)
      .json({
        status: "success",
        message: "Admin has been authenticated",
        token,
      });
  } catch (error) {
    return next(error);
  }
});

const _handleAdminSignup = asyncHandler(async (req, res, next) => {
  const { name, email, phone, password } = req.body;
  try {
    const isExist = await Admin.findOne({ email, phone });
    if (isExist) {
      const error = new AppError(
        "Admin Already exisits...",
        HttpStatusCode.CONFLICT
      );
      return next(error);
    }

    await Admin.create({
      name,
      email,
      phone,
      password,
    });

    return res
      .status(HttpStatusCode.OK)
      .json({ status: "success", message: "Admin has been created" });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  _handleAdminSignup,
  handleAdminLogin,
};
