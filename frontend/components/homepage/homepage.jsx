import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomepageNav,
  Welcome
} from './styledHomepage.js';

const Homepage = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <HomepageNav>
      <Welcome> Welcome to Stick-To-It</Welcome>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </HomepageNav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <HomepageNav>
        <Welcome> Welcome to Stick-To-It</Welcome>
        <button className="header-button" onClick={logout}>Log Out</button>
      </HomepageNav>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Homepage;
