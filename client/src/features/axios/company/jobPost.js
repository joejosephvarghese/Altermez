import axios, { AxiosRequestConfig } from "axios";

import apiConfig from "../../../utils/apiConfig";




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