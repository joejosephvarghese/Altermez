const asyncHandler = require("express-async-handler");
const AppError = require("../../utils/error-class/AppError");
const HttpStatusCodes = require("../../utils/httpStatusCodes");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../database/models/userModel");

//user Signup

const handleUserSignup = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const { fname, email, password } = req.body;
  if ((!fname, !email, !password)) {
    const error = new AppError(
      "Please enter the all the values",
      HttpStatusCodes.BAD_REQUEST
    );
    next(error);
  }

  // checking if the user allready exsit in database or not

  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new AppError(
      "User with this email address already exists",
      HttpStatusCodes.CONFLICT
    );
  }

  const newUser = new User({
    fname,
    email,
    password,
  });

  await newUser.save();

  res.status(HttpStatusCodes.SUCCESS).json({
    _id: newUser?._id,
    fname: newUser?.fname,
    email: newUser?.email,
    pic: newUser?.pic,
    message: "user registered sucessfully",
  });
});



//user Login


const handleUserLogin = asyncHandler(async (req, res, next) => {
  console.log(req.body);

  const error = new AppError(
    "Somthing went wrong",
    HttpStatusCodes.BAD_REQUEST
  );
  next(error);
});

const handleVerifyUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);
});

module.exports = {
  handleUserSignup,
  handleUserLogin,
  handleVerifyUser,
};
