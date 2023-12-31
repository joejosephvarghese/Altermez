import axios, { AxiosRequestConfig } from "axios";

import apiConfig from "../../../utils/apiConfig";

axios.interceptors.request.use((request) =>{
    const token = localStorage.getItem("token") ?? null;
    console.log(token, "in jog delete");
    if(token){
        request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request
})


export const jobPost = async (payload) => {
    try {
        const config = {
            url: `${apiConfig.jobPost}`,
            method: "post",
            data: payload
        };
        const response = await axios(config);  // Use axios to make the request
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 409) {
            throw new Error("Job post failed: Conflict - Job already exists!");
        } else {
            throw new Error("Job post failed, please try again");
        }
    }
};



