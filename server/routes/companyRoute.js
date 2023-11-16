const express = require("express");
const router = express.Router();
const {handleAddingAndUpdateingCompany} = require("../controllers/company-controller/companyController");


router.route("/").post(handleAddingAndUpdateingCompany);



module.exports = router