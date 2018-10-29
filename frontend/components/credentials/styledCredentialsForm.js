import styled from 'styled-components';

import {
  Button
} from '../componentLibrary/button';

import {
  navColor,
  textColor,
  mainFont,
  buttonColor
} from '../../util/constantsCSS.js';

export const SessionFormContainer = styled.div`
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  width: 100%;
  font-family: ${mainFont};
  color: ${textColor};
`;
export const Button = styled(Button)`
`;
