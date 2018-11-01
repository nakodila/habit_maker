import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import habitsErrorsReducer from './habits_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  habits: habitsErrorsReducer,
});

export default errorsReducer;
