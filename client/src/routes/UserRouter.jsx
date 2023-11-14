import{Route,Routes} from "react-router-dom"
import UserSignUpPage from "../pages/User/UserSignUpPage";


const UserRouter=()=>{
  
 return (
    <div>
        <Routes>
            <Route path="/signup" element={<UserSignUpPage/>}>
            </Route>
        </Routes>
    </div>
 )
}

export default UserRouter;