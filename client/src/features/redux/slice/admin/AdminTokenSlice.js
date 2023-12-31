import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const loadTokenFromLocalStorage=()=>{
    try {
        const token=localStorage.getItem('adminToken');
        return token ? token : null;
    } catch (error) {
        console.log("error loading token from local storage",error);
        return null;

        
    }
};

  const initialState={
  token:loadTokenFromLocalStorage()
  };


  const  admintokenSlice=createSlice({
    name:'admin_token',
    initialState,
    reducers:{
        adminsetToken: (state, action) => {
            state.token = action.payload;
            try {
              console.log(action.payload)
              localStorage.setItem('adminToken', action.payload);
            } catch (error) {
              console.log('Error storing token in local storage:', error);
            }
          },
          adminclearToken: (state) => {
            state.token = null;
            try {
              localStorage.removeItem('adminToken');
            } catch (error) {
              console.log('Error removing token from local storage:', error);
            }
          },
    }
    
  })
  

  export const {  adminsetToken, adminclearToken } = admintokenSlice.actions;
export default admintokenSlice.reducer;