import styled from 'styled-components';

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
  flexColumn
} from '../../util/constantsCSS.js';


export const SessionFormContainer = styled.div`
  ${flexColumn}
  height: calc(100vh - ${navHeight});
  justify-content: center;
  align-items: center;
  font-family: ${mainFont};
  font-size: 22px;
  color: ${textColor};
`;
export const SignUpButton = styled(Button)`
  height: 50px;
  background-color: ${buttonColor};
  font-size: 20px;
  color: ${textColor};
  border-color: ${borderColor};
`;

export const Form = styled.form`
  ${flexColumn}
  color: ${textColor};
  height: 50%;
  justify-content: space-between;
`;

export const Greeting = styled.h1`
  font-size: 25px;
  margin: 20px;
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  display: block;
  height: 40px;
  font-size: 20px;
  border-radius: 5px;
  color: ${textColor};
`;
