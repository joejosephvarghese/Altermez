
import axios, { AxiosRequestConfig } from "axios";

import apiConfig from "../../../../utils/apiConfig";

export const adminLogin = async (payload)=>{
    try {
     const config={
       url:`${apiConfig.adminLogin}`,
       method:"post",
       data:payload
     };
     const response= await axios(config);
     return response.data;
     
    } catch (error) {
     if (error.message === "Request failed with status code 401") {
       throw new Error("Incorrect email or password !!!");
    }else {
     throw new Error("Login failed, try again");
   }
    }
   };