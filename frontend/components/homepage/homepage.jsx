import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomepageNav
} from './styledHomepage.js';

const Homepage = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <HomepageNav>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </HomepageNav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <HomepageNav>
        <h1>Stick to it</h1>
        <button className="header-button" onClick={logout}>Log Out</button>
      </HomepageNav>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Homepage;
