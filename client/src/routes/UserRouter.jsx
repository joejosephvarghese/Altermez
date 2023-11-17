import { Route, Routes } from "react-router-dom";
import UserSignUpPage from "../pages/User/UserSignUpPage";
import UserLoginPage from "../pages/User/UserLoginPage";
import Layout from "../components/user/layout/Layout";

const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="signup" element={<UserSignUpPage />} />
        <Route path="login" element={<UserLoginPage />} />
        <Route path="/" element={<Layout/>}>
           <Route index element={<h1>user table</h1>}/>
           <Route path="company" element={<h1>company table</h1>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default UserRouter;
