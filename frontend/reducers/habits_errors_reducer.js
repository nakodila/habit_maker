import {
  RECEIVE_HABIT_ERRORS,
  CLEAR_HABIT_ERRORS
} from from '../actions/habit_actions';

const habitsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HABIT_ERRORS:
      return action.errors;
    case CLEAR_HABIT_ERRORS:
      return [];
    default:
      return state;
  }
}

export default habitsErrorsReducer;
