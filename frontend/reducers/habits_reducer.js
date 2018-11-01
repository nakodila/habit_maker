import merge from 'lodash/merge';
import {
  RECEIVE_HABIT,
  RECEIVE_HABITS,
  REMOVE_HABIT
} from '../actions/habit_actions';

const habitsReducer = (state={}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HABITS:
      return action.habits;
    case RECEIVE_HABIT:
      return merge({}, state, {[action.payload.habit.id]: action.payload.habit});
    case REMOVE_HABIT:
      newState = merge({}, state);
      delete newState[action.habitId];
      return newState;
    default:
      return state;
  }
}

export default habitsReducer;
