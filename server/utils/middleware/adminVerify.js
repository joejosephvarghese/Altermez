const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const AppError = require("../error-class/AppError");
const HttpStatusCodes = require("../httpStatusCodes");
const Configs = require("../constants");

const handleAdminVerify = asyncHandler(async (req, res, next) =>{
    try {
        const token = req.headers["authorization"].split("Bearer ")[1];
        console.log('====================================');
        console.log(token);
        console.log('====================================');
        jwt.verify(token, Configs.JWT_SECRET, (err, decoded) =>{
            if(err){
                const error = new AppError(err.message, HttpStatusCodes.UNAUTHORIZED);
               return next(error)
            }
            if(!decoded.isAdmin){
                const error = new AppError("The user is not authorized to user this action....", HttpStatusCodes.UNAUTHORIZED);
                return next(error)
            }
            req.admin = decoded;
            next();
        });

    } catch (error) {
        next(error)
    }
})



module.exports = {
    handleAdminVerify
}