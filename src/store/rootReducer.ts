import { combineReducers } from 'redux';
import authReducer from 'store/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootReducer = typeof rootReducer;

export default rootReducer;
