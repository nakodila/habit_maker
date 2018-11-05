import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  createHabit,
  receiveHabitErrors,
  clearHabitErrors
} from '../../actions/habit_actions';
import HabitForm from './habit_form';

const mapStateToProps = ({ errors}) => {
  return {
    errors: errors.habits,
    formType: 'New Form',
  }
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (habit) => dispatch(createHabit(habit)),
    clearErrors: () => dispatch(clearHabitErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitForm);
