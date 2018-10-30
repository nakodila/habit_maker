import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  Button
} from '../componentLibrary/button';
import {
  navColor,
  textColor,
  mainFont,
  buttonColor,
  borderColor
} from '../../util/constantsCSS.js';

export const HomepageNav = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${navColor};
  font-family: ${mainFont};
  color: ${textColor};
`;

export const Logo = styled.h1`
  font-family: ${mainFont};
  color: ${textColor};
  font-size: 25px;
`;

export const SessionLink = styled(Link)`
  font-family: ${mainFont};
  font-size: 20px;
`;

export const LoginSignupContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 170px;
`;

export const LogoutButton = styled(Button)`
  width: 100px;
  padding: 10px;
  color: ${textColor};
  font-size: 15px;
  font-weight: 700;
  border-color: ${borderColor};
`;

export const StyledText = styled.h2`
  font-family: ${mainFont};
  color: ${textColor};
  font-size: 20px;
`;
