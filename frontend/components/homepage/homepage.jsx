import React from 'react';
import { Link } from 'react-router-dom';

import {
  HomepageNav,
  Logo,
  LoginSignupContainer,
  LogoutButton,
  SessionLink,
  StyledText
} from './styledHomepage.js';

const Homepage = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <HomepageNav>
      <Logo>Stick-to-It</Logo>
      <LoginSignupContainer>
        <SessionLink to="/login">Login</SessionLink>
        <StyledText>or</StyledText>
        <SessionLink to="/signup">Sign up!</SessionLink>
      </LoginSignupContainer>
    </HomepageNav>
  );
  const personalGreeting = () => (
    <hgroup >
      <HomepageNav>
        <Logo>Stick-to-It</Logo>
        <LogoutButton onClick={logout}>Log Out</LogoutButton>
      </HomepageNav>
      <StyledText>Hi, {currentUser.username}!</StyledText>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Homepage;
