import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createHabit } from '../../actions/habit_actions';
import HabitForm from './habit_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.habits,
    formType: 'New Form',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (habit) => dispatch(createHabit(habit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitForm);
