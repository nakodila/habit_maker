import React from 'react';
import {
  Route
} from 'react-router-dom';

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
      <HomepageNav className='homepage-nav'>
        <Logo>Stick-to-It</Logo>
        <LoginSignupContainer>
          <SessionLink to="/login">Login</SessionLink>
          <StyledText>or</StyledText>
          <SessionLink to="/signup">Sign up!</SessionLink>
        </LoginSignupContainer>
      </HomepageNav>
  );
  const personalGreeting = () => (
    <div className='homepage'>
      <HomepageNav className='homepage-nav'>
        <Logo>Stick-to-It</Logo>
        <LogoutButton onClick={logout}>Log Out</LogoutButton>
      </HomepageNav>
      <HomepageContainer className='homepage-body'>
        <StyledText>Hi, {currentUser.username}!</StyledText>
        <AddHabit />
      </HomepageContainer>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Homepage;
