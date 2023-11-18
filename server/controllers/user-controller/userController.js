const asyncHandler = require("express-async-handler");
const AppError = require("../../utils/error-class/AppError");
const HttpStatusCodes = require("../../utils/httpStatusCodes");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../database/models/userModel");
const Configs = require("../../utils/constants");

//user Signup

const handleUserSignup = asyncHandler(async (req, res, next) => {
  // console.log(req.headers);
  console.log(req.body, "odkdf");
  const { name, email, password } = req.body;

  if ((!name, !email, !password)) {
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
    name,
    email,
    password,
  });
  console.log(newUser, "ff");
  await newUser.save();

  res.status(HttpStatusCodes.SUCCESS).json({
    _id: newUser?._id,
    name: newUser?.name,
    email: newUser?.email,
    pic: newUser?.pic,
    message: "user registered sucessfully",
  });
});

const handleUserLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    const err = new AppError(
      "Invalid Credentals",
      HttpStatusCodes.UNAUTHORIZED
    );
    return next(err);
  }

  const isCorrect = await bcrypt.compare(password, user.password);
  if (isCorrect) {
    const payload = {
      id: user._id,
      isAdmin: user.isAdmin,
      name: user.name,
      email: user.email,
    };
    const token = jwt.sign(payload, Configs.JWT_SECRET);

    return res
      .status(HttpStatusCodes.OK)
      .json({ status: "success", message: "User has been verified", token });
  }
  const err = new AppError("Invalid Credentials", HttpStatusCodes.UNAUTHORIZED);
  return next(err);
});

const handleVerifyUser = asyncHandler(async (req, res, next) => {
  if (req.headers["authorization"]) {
    const token = req.headers["authorization"].split(" ")[1];
    console.log(token);
    jwt.verify(token, Configs.JWT_SECRET, (error, decoded) => {
      if (error) {
        const err = new AppError(error.message, HttpStatusCodes.UNAUTHORIZED);
        next(err);
      }
      if(decoded.isAdmin){
        const err = new AppError("This user does not have the access", HttpStatusCodes.UNAUTHORIZED);
        next(err);
      }
    });
    next()
  }
});

const handleGetUsers = asyncHandler(async (req, res, next) => {
  const { page, limit } = req.query;
  let result = {};
  try {
    const documentCount = await User.countDocuments();
    const pageCount =Math.ceil(documentCount/limit) ?? 0;
    result.pages = pageCount
    console.log(documentCount, pageCount);
    const users = await User.find({})
      .skip((page - 1) * limit)
      .limit(limit);
      result.users = users
      res.status(HttpStatusCodes.OK).json({status: "success", message: "Fetching all users", data: result})
  } catch (error) {
    next(error)
  }
});

module.exports = {
  handleUserSignup,
  handleUserLogin,
  handleVerifyUser,
  handleGetUsers,
};
