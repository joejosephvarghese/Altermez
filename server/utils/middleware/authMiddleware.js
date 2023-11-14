const handleVerifyUser = asyncHandler(async (req, res, next) =>{
    console.log(req.body)
})


module.exports = {
    handleVerifyUser,
}