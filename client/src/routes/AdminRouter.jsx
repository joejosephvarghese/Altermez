import { Navigate, Route, Routes } from "react-router-dom";

import AdminLoginPage from "../pages/Admin/AdminLoginPage";
import AdminHomepage from "../pages/Admin/AdminHomePage";
import ListCompaniPage from "../pages/Admin/ListCompaniPage";
import UsersList from "../pages/Admin/UserListPage";
import UserPage from "../pages/Admin/UsersPage";
import PostCompany from "../pages/Admin/PostJob";
const adminToken = localStorage.getItem("adminToken") ?? null;

const AdminRouter = ()=>{
   
    return(
        <div>
        <Routes>
          <Route path="login" element={<AdminLoginPage />} />
          <Route path="/*" element={<AdminHomepage/> }>
             <Route index element={<UserPage/>}/>
             <Route path="companies" element={<ListCompaniPage/>}/>
             <Route path="postjob" element={<PostCompany/>}/>
          </Route>
        </Routes>
      </div>
    )
}

export default AdminRouter;