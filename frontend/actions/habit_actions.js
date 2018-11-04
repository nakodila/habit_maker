import * as habitAPIUtil from '../util/habit_api_util';

export const RECEIVE_HABITS = 'RECEIVE_HABITS';
export const RECEIVE_HABIT = 'RECEIVE_HABIT';
export const REMOVE_HABIT = 'REMOVE_HABIT';
export const RECEIVE_HABIT_ERRORS = 'RECEIVE_HABIT_ERRORS';
export const CLEAR_HABIT_ERRORS = 'CLEAR_HABIT_ERRORS';

const receiveHabits = (habits) => {
  return {
    type: RECEIVE_HABITS,
    habits
  }
};

const receiveHabit = (payload) => {
  return {
    type: RECEIVE_HABIT,
    payload
  }
}
const removeHabit = (habit) => {
  return {
    type: REMOVE_HABIT,
    habitId: habit.id
  }
};

export const receiveHabitErrors = errors => ({
  type: RECEIVE_HABIT_ERRORS,
  errors
});

export const clearHabitErrors = () => ({
  type: CLEAR_HABIT_ERRORS,
});

export const fetchHabits = () => dispatch => (
  habitAPIUtil.fetchHabits().then(habits => (
    dispatch(receiveHabits(habits))
  ), error => (
    dispatch(receiveHabitErrors(error.responseJSON))
  ))
);

export const fetchHabit = id => dispatch => (
  habitAPIUtil.fetchHabit(id).then(habit => (
    dispatch(receiveHabit(habit))
  ), error => (
    dispatch(receiveHabitErrors(error.responseJSON))
  ))
);

export const createHabit = habit => dispatch => (
  habitAPIUtil.createHabit(habit).then(payload => (
    dispatch(receiveHabit(payload))
  ), error => (
    dispatch(receiveHabitErrors(error.responseJSON))
  ))
);
export const updateHabit = id => dispatch => (
  habitAPIUtil.updateHabit(id).then(habit => (
    dispatch(receiveHabit(habit))
  ), error => (
    dispatch(receiveHabitErrors(error.responseJSON))
  ))
);
export const deleteHabit = id => dispatch => (
  habitAPIUtil.deleteHabit(id).then(habit => (
    dispatch(removeHabit(habit))
  ))
);
