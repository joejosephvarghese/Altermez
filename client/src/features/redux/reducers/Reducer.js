import { combineReducers } from 'redux';
import tokenReducer from '../slice/user/TokenSlice';
import userLoginAuthReducer from '../slice/user/UserLoginAuthSlice';



const rootReducer = combineReducers({
    token: tokenReducer,
    userAuth: userLoginAuthReducer,
   
  });



export default rootReducer;