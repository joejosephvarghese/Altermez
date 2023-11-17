import { Route, Routes } from "react-router-dom";

import AdminLoginPage from "../pages/Admin/AdminLoginPage";
import AdminHomepage from "../pages/Admin/AdminHomePage";
import ListCompaniPage from "../pages/Admin/ListCompaniPage";
import ListCompaniTable from "../components/admin/ListCompaniTable";
const AdminRouter = ()=>{
   
    return(
        <div>
        <Routes>
          <Route path="login" element={<AdminLoginPage />} />
          <Route path="/*" element={<AdminHomepage/>}>
             <Route index element={<h1>User Table</h1>}/>
             <Route path="companies" element={<ListCompaniPage/>}/>
          </Route>
        </Routes>
      </div>
    )
}

export default AdminRouter;