const asyncHandler = require("express-async-handler")

const handleVerifyUser = asyncHandler(async (req, res, next) =>{
    console.log(req)
    next()
})


module.exports = {
    handleVerifyUser,
}