import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Homepage from './homepage/homepage_container';
import LoginFormContainer from './credentials/login_form_container';
import SignupFormContainer from './credentials/signup_form_container';

const App = () => (
  <div>
    <h1>Sticky to it</h1>
    <Homepage/>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </Switch>
</div>
);

export default App;
