const asyncHandler = require("express-async-handler");
const Company = require("../../database/models/companyModel");
const AppError = require("../../utils/error-class/AppError");
const HttpStatusCode = require("../../utils/httpStatusCodes");

const handleAddingAndUpdateingCompany = asyncHandler(async (req, res, next) => {
  const { name, type, email, user, country, ...args } = req.body;
  console.log({ name, type, email, user, country, ...args })
  try {
    const query = { name, type, email, user, country };
    const update = { ...args };
    const options = { upsert: true };

    const company = await Company.updateOne(query, update, options);
    return res.status(HttpStatusCode.OK).json({status: "success", message: "Action has been successfull", company});
  } catch (error) {
    if (error.code === 11000) {
      next(new AppError("Company already registered", HttpStatusCode.CONFLICT));
    }
    next(error);
  }
});

module.exports = {
  handleAddingAndUpdateingCompany,
};
