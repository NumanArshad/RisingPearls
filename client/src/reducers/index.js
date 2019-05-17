import login_Reducer from './login';
import register_Reducer from './Register';
import todo_Reducer from './Todo';
import dashboard_Reducer from './dashboard';
import announcement_Reducer from './meetingsEvents';
import admin_Reducer from './adminEnd';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  login_Reducer,
  register_Reducer,
  todo_Reducer,
  dashboard_Reducer,
  announcement_Reducer,
  admin_Reducer
});

export default rootReducer;
