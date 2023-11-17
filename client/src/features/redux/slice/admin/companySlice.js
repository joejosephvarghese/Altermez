import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import configKeys from "../../../../utils/config";

const instance = axios.create({
    baseURL: `${configKeys.API_URL}`
})

instance.interceptors.request.use((request) =>{
    const token = localStorage.getItem("adminAuth") ?? null
    if(token){
        request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request
})

export const handleFetchingCompanies = createAsyncThunk("get/companies", async (payload) =>{
    const {page, limit} = payload;
    try {
        const response = await instance.get(`/company?page=${page}&limit=${limit}`);
        console.log(response)
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
})

const initialState = {
    loading: false,
    data: [],
    error: null
}

const companySlice = createSlice({
    name: "get-companies",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(handleFetchingCompanies.pending, (state) =>{
                state.loading = true;
                state.error = null;
            })
            .addCase(handleFetchingCompanies.fulfilled, (state, action) =>{
                state.loading = false;
                state.data = action.payload.companies ?? [];
            })
            .addCase(handleFetchingCompanies.rejected, (state, action) =>{
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default companySlice.reducer;
