const asyncHandler = require("express-async-handler");
const Company = require("../../database/models/companyModel");
const AppError = require("../../utils/error-class/AppError");
const HttpStatusCode = require("../../utils/httpStatusCodes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Configs = require("../../utils/constants");
const { config } = require("dotenv");

const handleGetCompanies = asyncHandler(async (req, res, next) => {
  const { page, limit } = req.query;
  try {
    const totalCompanies = Company.countDocuments();
    const totalPage = Math.ceil(totalCompanies / limit);
    const companies = await Company.find()
 
      .skip((page - 1) * limit)
      .limit(limit);
         console.log('====================================');
    console.log(companies);
    console.log('====================================');
    return res.status(HttpStatusCode.OK).json({
      status: "success",
      message: "Companies retrieved successfully",
      companies,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

const handleAddCompany = asyncHandler(async (req, res, next) => {
  const { name, type, email, user, country, ...args } = req.body;
  console.log({ name, type, email, user, country, ...args });
  try {
    const query = { name, type, email, user, country };
    const update = { ...args };
    const isExist = await Company.findOne({ name });
    if (!isExist) {
      const company = await Company.create({ ...req.body });
      return res.status(HttpStatusCode.OK).json({
        status: "success",
        message: "Action has been successfull",
        company,
      });
    }
    const error = new AppError(
      "Company has been already added",
      HttpStatusCode.CONFLICT
    );
    next(error);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return next(
        new AppError("Company already registered", HttpStatusCode.CONFLICT)
      );
    }
    return next(error);
  }
});

const handleUpdateCompany = asyncHandler(async (req, res, next) => {
  const { companyId } = req.query;
  const updates = req.body;
  try {
    const company = await Company.findOneAndUpdate(
      { _id: companyId },
      { ...updates },
      { new: true }
    );
    if (!company) {
      const error = new AppError(
        "Cannot find company",
        HttpStatusCode.NOT_FOUND
      );
      return next(error);
    }

    return res.status(HttpStatusCode.OK).json({
      status: "success",
      message: "Company details has been updated",
      company,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

const handleSoftDeleteCompany = asyncHandler(async (req, res, next) => {
  const { companyId } = req.query;
  const company = await Company.findOne({ _id: companyId });
  if (!company) {
    const error = new AppError(
      "There is not such company to delete",
      HttpStatusCode.NOT_FOUND
    );
    return next(error);
  }
  const deletedCompany = await Company.findOneAndUpdate(
    { _id: companyId },
    { deleted: true },
    { new: true }
  );
  return res.status(HttpStatusCode.OK).json({
    status: "success",
    message: "Company has been deleted",
    deletedCompany,
  });
});

const handleCompleteDelete = asyncHandler(async (req, res, next) => {
  console.log("company has been deleted");
  const { companyId } = req.query;
  try {
    await Company.deleteOne({ _id: companyId });
    return res.status(HttpStatusCode.OK).json({
      status: "success",
      message: "Company has been deleted successfully...",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  handleAddCompany,
  handleUpdateCompany,
  handleSoftDeleteCompany,
  handleCompleteDelete,
  handleGetCompanies,
};
