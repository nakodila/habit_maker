import React from 'react';

import {
  HomepageContainer,
  HomepageNav,
  Logo,
  LoginSignupContainer,
  LogoutButton,
  SessionLink,
  StyledText
} from './styled_homepage.js';

import { AddHabit } from './habits/habits';

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
    <div>
      <HomepageNav>
        <Logo>Stick-to-It</Logo>
        <LogoutButton onClick={logout}>Log Out</LogoutButton>
      </HomepageNav>
      <HomepageContainer>
        <StyledText>Hi, {currentUser.username}!</StyledText>
        <AddHabit/>
      </HomepageContainer>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Homepage;
