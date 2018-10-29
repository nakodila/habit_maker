import styled from 'styled-components';
import {
  navColor,
  textColor,
  mainFont
} from '../../util/constantsCSS.js';

export const HomepageNav = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: ${navColor};
  font-family: ${mainFont};
  color: ${textColor};
`;

export const Welcome = styled.h1`
  font-family: ${mainFont};
  color: ${textColor};
  font-size: 24px;
`;
