import React from 'react';

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
      <AddHabitBox to="/newhabit">
      </AddHabitBox>
      <AddHabitBox to="/newhabit">
      </AddHabitBox>
    </UpperHabits>
    <LowerHabits>
      <AddHabitBox to="/newhabit">
      </AddHabitBox>
      <AddHabitBox to="/newhabit">
      </AddHabitBox>
    </LowerHabits>
  </HabitsContainer>
);
