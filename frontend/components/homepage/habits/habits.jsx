import React from 'react';
import { Link } from 'react-router-dom';
import {
  AddHabitBox,
  HabitsContainer,
  LowerHabits,
  UpperHabits
} from './styledHabits'

export const AddHabit =  () => (
  <HabitsContainer>
    <UpperHabits>
      <AddHabitBox></AddHabitBox>
      <AddHabitBox></AddHabitBox>
    </UpperHabits>
    <LowerHabits>
      <AddHabitBox></AddHabitBox>
      <AddHabitBox></AddHabitBox>
    </LowerHabits>
  </HabitsContainer>
);
