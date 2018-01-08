// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import user from './userReducer';
 import users from './administrationReducer';

 const rootReducer = combineReducers({
  user,
  users,
 });

 export default rootReducer;
