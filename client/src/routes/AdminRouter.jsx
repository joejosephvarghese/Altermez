import { Route, Routes } from "react-router-dom";

import AdminLoginPage from "../pages/Admin/AdminLoginPage";
import AdminHomepage from "../pages/Admin/AdminHomePage";
import ListCompaniPage from "../pages/Admin/ListCompaniPage";
const AdminRouter = ()=>{
   
    return(
        <div>
        <Routes>
          <Route path="login" element={<AdminLoginPage />} />
          <Route path="" element={<AdminHomepage/>}/>
          <Route path="/companies" element={<ListCompaniPage/>} />
          
        </Routes>
      </div>
    )
}

export default AdminRouter;