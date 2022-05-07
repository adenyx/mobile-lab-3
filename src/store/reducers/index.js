import { combineReducers } from 'redux';

import appReducer from './app';
import userReducer from './user';
import musicReducer from './music';

export default combineReducers({
  app: appReducer,
  user: userReducer,
  music: musicReducer,
});
