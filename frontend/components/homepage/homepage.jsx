import React from 'react';
import { Link } from 'react-router-dom';

import {
  HomepageNav,
  Logo,
  LoginSignupContainer,
  LogoutButton,
  Welcome
} from './styledHomepage.js';

const Homepage = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <HomepageNav>
      <Logo>Stick-2-It</Logo>
      <LoginSignupContainer>
        <Link to="/login">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign up!</Link>
      </LoginSignupContainer>
    </HomepageNav>
  );
  const personalGreeting = () => (
    <hgroup >
      <HomepageNav>
        <Logo>Stick-2-It</Logo>
        <LogoutButton onClick={logout}>Log Out</LogoutButton>
      </HomepageNav>
      <Welcome>Hi, {currentUser.username}!</Welcome>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Homepage;
