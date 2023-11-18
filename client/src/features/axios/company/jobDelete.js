import axios from "axios";
import apiConfig from "../../../utils/apiConfig";



axios.interceptors.request.use((request) =>{
    const token = localStorage.getItem("adminToken") ?? null;
    console.log(token, "in jog delete");
    if(token){
        request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request
})



export const deleteJob = async (payload) => {
    
    try {
        const config = {
            url: `${apiConfig.jobDelete}?companyId=${payload}`,
            method: "delete",
          
        };
        const response = await axios(config);  // Use axios to make the request
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 409) {
            throw new Error("company delete failed: Conflict - !");
        } else {
            throw new Error("company delete failed, please try again");
        }
    }
};