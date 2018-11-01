import React from 'react';
import { Link } from 'react-router-dom';
// import {
//   AddIcon
// } from './add_icon';

import {
  AddHabitBox,
  HabitsContainer,
  LowerHabits,
  UpperHabits
} from './styled_habits'

export const AddHabit =  () => (
  <HabitsContainer>
    <UpperHabits>
      <AddHabitBox>
      </AddHabitBox>
      <AddHabitBox>
      </AddHabitBox>
    </UpperHabits>
    <LowerHabits>
      <AddHabitBox>
      </AddHabitBox>
      <AddHabitBox>
      </AddHabitBox>
    </LowerHabits>
  </HabitsContainer>
);
