import configKeys from "./config";


const apiConfig={
    //user apiConfig
    userRegister:`${configKeys.API_URL}v1/auth/signup`,
    userLogin:`${configKeys.API_URL}v1/auth//login`,

  // adimin apiConfig
    adminLogin:`${configKeys.API_URL}v1/admin/login`
}


export default apiConfig;