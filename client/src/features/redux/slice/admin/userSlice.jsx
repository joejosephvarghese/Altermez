import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import configKeys from "../../../../utils/config";
import axios from "axios";

const instance = axios.create({
    baseURL: `${configKeys.API_URL}`
})

instance.interceptors.request.use((request) =>{
    const token = localStorage.getItem("adminToken") ?? null
    if(token){
        request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request
})

export const handleGettingUser = createAsyncThunk(
  "get/users",
  async ({ page, limit }) => {
    try {
      const respone = await instance.get(`/auth?page=${page}&limit=${limit}`);
      return respone.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const initialState = {
  loading: false,
  data: {},
  error: null,
};

const userSlice = createSlice({
  name: "user-management",
  initialState,
  reducers: {
    removeUsers: (state, action) => {
      state.data = state.data?.filter((user) => user._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleGettingUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleGettingUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(handleGettingUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { removeUsers } = userSlice.actions;
export default userSlice.reducer;
