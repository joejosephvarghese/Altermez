import { combineReducers } from 'redux';
import tokenReducer from '../slice/user/TokenSlice';
import userLoginAuthReducer from '../slice/user/UserLoginAuthSlice';
import adminLoginAuthReducer from '../slice/admin/AdminLoginAuthSlice';
import companyReduer from '../slice/admin/companySlice';
import admintokenReducer from '../slice/admin/AdminTokenSlice';
import userSlice from '../slice/admin/userSlice';


const rootReducer = combineReducers({
    token: tokenReducer,
    userAuth: userLoginAuthReducer,
    adminAuth: adminLoginAuthReducer,
    companies: companyReduer,
    adminToken: admintokenReducer,
    user: userSlice,
  });



export default rootReducer;