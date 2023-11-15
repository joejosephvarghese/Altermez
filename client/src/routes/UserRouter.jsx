import { Route, Routes } from "react-router-dom";
import UserSignUpPage from "../pages/User/UserSignUpPage";
import UserLoginPage from "../pages/User/UserLoginPage";

const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="signup" element={<UserSignUpPage />} />
        <Route path="login" element={<UserLoginPage />} />
      </Routes>
    </div>
  );
};

export default UserRouter;
