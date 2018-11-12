import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import './reset.css';
import Homepage from './homepage/homepage_container';
import LoginFormContainer from './credentials/login_form_container';
import SignupFormContainer from './credentials/signup_form_container';
import NewHabit from './habits/habit_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  AppContainer
} from './styledApp.js'

const App = () => (
  <AppContainer className='AppContainer'>
    <Homepage/>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/newhabit" component={NewHabit} />
    </Switch>
  </AppContainer>
);

export default App;
