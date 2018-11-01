import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Errors
} from '../errors/styled_errors';

import {
  Form,
  Greeting,
  Input,
  Label,
  SessionFormContainer,
  SignUpButton
} from './styled_credentials_form';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <Errors>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </Errors>
    );
  }

  render() {
    return (
      <SessionFormContainer>
        <Form onSubmit={this.handleSubmit}>
          <Greeting>Welcome to Stick-to-it!</Greeting>
          {this.renderErrors()}
            <Label>Username:</Label>
            <Input type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
            <Label>Password:</Label>
            <Input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <SignUpButton type="submit">{this.props.formType}</SignUpButton>
            <p>or {this.props.navLink} instead</p>
        </Form>
      </SessionFormContainer>
    );
  }
}

export default withRouter(SessionForm);
