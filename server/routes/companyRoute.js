const express = require("express");
const router = express.Router();
const {
  handleGetCompanies,
  handleSoftDeleteCompany,
  handleCompleteDelete,
  handleAddCompany,
  handleUpdateCompany,
} = require("../controllers/company-controller/companyController");

router.route("/")
    .get(handleGetCompanies)
    .post(handleAddCompany)
    .put(handleUpdateCompany)
    .patch(handleSoftDeleteCompany)
    .delete(handleCompleteDelete);

module.exports = router;
