import { Route, Routes } from "react-router-dom";

import AdminLoginPage from "../pages/Admin/AdminLoginPage";
import AdminHomepage from "../pages/Admin/AdminHomePage";

const AdminRouter = ()=>{
   
    return(
        <div>
        <Routes>
          <Route path="login" element={<AdminLoginPage />} />
          <Route path="" element={<AdminHomepage/>}/>
          
        </Routes>
      </div>
    )
}

export default AdminRouter;