import axios, { AxiosRequestConfig } from "axios";

import apiConfig from "../../../../utils/apiConfig";



export const registerUser = async (payload)=>{
    try {
       const config={
      url:`${apiConfig.userRegister}`,
      method:"post",
      data:payload
       } ;
       const response=await axios(config)
    return response.data
    } catch (error) {
        if (error.message === "Request failed with status code 409") {
            throw new Error("Email already exists !!!");
          }else {
            throw new Error("Signup failed, try again");
          }
    }
};


export const userLogin = async (payload)=>{
 try {
  const config={
    url:`${apiConfig.userLogin}`,
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