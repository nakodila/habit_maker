import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  addHabitColor,
  hoverBackground
} from '../../../util/constantsCSS';

export const HabitsContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  align-items: space-between;
  width: 320px;
  height: 320px;
`;

export const UpperHabits = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 320px;
  height: 160px;
`;

export const LowerHabits = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  width: 320px;
  height: 160px;
`;

export const AddHabitBox = styled(Link)`
  width: 155px;
  height: 155px;
  background-color: ${addHabitColor};
  coursor: pointer;
  :hover {
    background: ${hoverBackground};
  }
`;
