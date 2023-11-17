import { combineReducers } from 'redux';
import tokenReducer from '../slice/user/TokenSlice';
import userLoginAuthReducer from '../slice/user/UserLoginAuthSlice';
import adminLoginAuthReducer from '../slice/admin/AdminLoginAuthSlice';


const rootReducer = combineReducers({
    token: tokenReducer,
    userAuth: userLoginAuthReducer,
    adminAuth: adminLoginAuthReducer,
  });



export default rootReducer;