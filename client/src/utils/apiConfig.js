import configKeys from "./config";


const apiConfig={
    userRegister:`${configKeys.API_URL}v1/auth/signup`,
    userLogin:`${configKeys.API_URL}v1/auth//login`
}


export default apiConfig;