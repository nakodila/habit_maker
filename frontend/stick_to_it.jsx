import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Stick to it</h1>, root);
  window.login = login;
  window.signup = signup;
});
