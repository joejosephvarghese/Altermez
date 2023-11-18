import configKeys from "./config";


const apiConfig={
    //user apiConfig
    userRegister:`${configKeys.API_URL}/auth/signup`,
    userLogin:`${configKeys.API_URL}/auth/login`,

  // adimin apiConfig
    adminLogin:`${configKeys.API_URL}/admin/login`,
    getAllCompanies:`${configKeys.API_URL}/admin`,


    //company
    jobPost:`${configKeys.API_URL}/company`
  }


export default apiConfig;