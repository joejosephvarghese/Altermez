import { Route, Routes } from "react-router-dom";

import AdminLoginPage from "../pages/Admin/AdminLoginPage";

const AdminRouter = ()=>{
   
    return(
        <div>
        <Routes>
          <Route path="login" element={<AdminLoginPage />} />
          {/* <Route path="homepage" element={<AdminHomePage/>}/> */}
          
        </Routes>
      </div>
    )
}

export default AdminRouter;