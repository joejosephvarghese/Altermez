import { combineReducers } from 'redux';
import tokenReducer from '../slice/user/TokenSlice';
import userLoginAuthReducer from '../slice/user/UserLoginAuthSlice';
import adminLoginAuthReducer from '../slice/admin/AdminLoginAuthSlice';
import companyReduer from '../slice/admin/companySlice';


const rootReducer = combineReducers({
    token: tokenReducer,
    userAuth: userLoginAuthReducer,
    adminAuth: adminLoginAuthReducer,
    companies: companyReduer,
  });



export default rootReducer;