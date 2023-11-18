import { Route, Routes } from "react-router-dom";
import UserSignUpPage from "../pages/User/UserSignUpPage";
import UserLoginPage from "../pages/User/UserLoginPage";
import Layout from "../components/user/layout/Layout";
import UserTable from "../pages/User/UserTablePage";
import CompanyTable from "../pages/User/CompanyTablePage";
import PostCompany from "../pages/Admin/PostJob";
const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="signup" element={<UserSignUpPage />} />
        <Route path="login" element={<UserLoginPage />} />
        <Route path="/" element={<Layout/>}>
           <Route index element={<UserTable/>}/>
           <Route path="company" element={<CompanyTable/>}/>
           <Route path="add-company" element={<PostCompany/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default UserRouter;
