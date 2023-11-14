const asyncHandler = require("express-async-handler");
const AppError = require("../../utils/error-class/AppError");
const HttpStatusCodes = require("../../utils/httpStatusCodes");


const handleUserSignup = asyncHandler(async (req, res, next) =>{
    console.log(req.body)
})

const handleUserLogin = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const error = new AppError("Somthing went wrong", HttpStatusCodes.BAD_REQUEST)
    next(error)
})

const handleVerifyUser = asyncHandler(async (req, res, next) =>{
    console.log(req.body)
})



module.exports = {
    handleUserSignup,
    handleUserLogin,
    handleVerifyUser,
}