import styled, { css } from 'styled-components';

import {
  Button
} from '../componentLibrary/button';

import {
  navColor,
  textColor,
  mainFont,
  buttonColor,
  navHeight,
  borderColor,
  flexColumn,
  hoverBackground
} from '../../util/constantsCSS.js';

export const HabitFormContainer = styled.div`
  ${flexColumn}
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #FFFFFF;
  height: calc(100vh - ${navHeight});
  justify-content: center;
  align-items: center;
  font-family: ${mainFont};
  font-size: 22px;
  color: ${textColor};
`;

export const AddHabit = styled(Button)`
  margin-top: 30px;
  height: 50px;
  background-color: ${buttonColor};
  font-size: 20px;
  color: ${textColor};
  border-color: ${borderColor};
  :hover {
    background: ${hoverBackground};
  }
`;

export const Form = styled.form`
  ${flexColumn}
  box-sizing: border-box;
  color: ${textColor};
  background: ${buttonColor};
  width: 400px;
  padding: 40px;
  /* height: 100%; */
  border: 1px solid ${borderColor};
  border-radius: 5px;
  justify-content: space-between;
`;

export const Greeting = styled.h1`
  align-self: center;
  font-size: 25px;
  margin: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const calendar = css`
  background: #FFFFFF;
  width: 80%;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  font-size: 20px;
  border-radius: 5px;
  color: ${textColor};
`;
