const asyncHandler = require("express-async-handler");


const handleUserSignup = asyncHandler(async (req, res) =>{
    console.log(req.body)
})



module.exports = {
    handleUserSignup,
}