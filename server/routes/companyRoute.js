const express = require("express");
const router = express.Router();
const {
  handleGetCompanies,
  handleSoftDeleteCompany,
  handleCompleteDelete,
  handleAddCompany,
  handleUpdateCompany,
} = require("../controllers/company-controller/companyController");
const { handleAdminVerify } = require("../utils/middleware/adminVerify");
const {
  handleVerifyUser,
} = require("../controllers/user-controller/userController");

router
  .route("/")
  .get(handleGetCompanies)
  .post(handleVerifyUser, handleAddCompany)
  .put(handleUpdateCompany)
  .patch(handleSoftDeleteCompany)
  .delete(handleAdminVerify ,handleCompleteDelete);

module.exports = router;
