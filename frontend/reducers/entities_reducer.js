import { combineReducers } from 'redux';

import users from './users_reducer';
import habits from './habits_reducer';

export default combineReducers({
  users,
  habits
});
