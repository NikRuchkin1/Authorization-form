import { combineReducers } from 'redux';
import user from './user';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  formReducer,
  user,
});

export default rootReducer;