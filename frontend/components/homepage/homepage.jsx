import React from 'react';

import {
  HomepageNav,
  Logo,
  LoginSignupContainer,
  LogoutButton,
  SessionLink,
  StyledText
} from './styledHomepage.js';

import {
  AddHabit
} from './habits/habits'

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
      <AddHabit/>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Homepage;
