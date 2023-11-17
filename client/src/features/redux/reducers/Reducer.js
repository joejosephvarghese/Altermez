import { combineReducers } from 'redux';
import tokenReducer from '../slice/user/TokenSlice';
import userLoginAuthReducer from '../slice/user/UserLoginAuthSlice';
import adminLoginAuthReducer from '../slice/admin/AdminLoginAuthSlice';
import companyReduer from '../slice/admin/companySlice';
import admintokenReducer from '../slice/admin/AdminTokenSlice';


const rootReducer = combineReducers({
    token: tokenReducer,
    userAuth: userLoginAuthReducer,
    adminAuth: adminLoginAuthReducer,
    companies: companyReduer,
    adminToken: admintokenReducer,
  });



export default rootReducer;