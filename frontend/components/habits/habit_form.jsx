import React from 'react';
import { withRouter } from 'react-router-dom';
import { TwitterPicker } from 'react-color';
import Calendar from 'rc-calendar';
import Modal from 'react-modal';

import {
  Errors
} from '../errors/styled_errors';

import {
  Form,
  Greeting,
  HabitFormContainer,
  Input,
  Label,
  SignUpButton
} from './styled_habit_form';

class HabitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '',
      duration: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleChangeComplete(colour) {
    this.setState({ color: colour.hex });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const habit = Object.assign({}, this.state);
    this.props.processForm(habit);
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
      <Modal isOpen="true">
        <HabitFormContainer>
          <Form onSubmit={this.handleSubmit}>
            <Greeting>Add New Habit</Greeting>
            {this.renderErrors()}
            <Label>Name</Label>
            <Input type="text"
              value={this.state.name}
              onChange={this.update('name')}
            />
            <Label>Duration</Label>
            <Calendar/>
            <Label>Color:</Label>
                <TwitterPicker
                  color={this.state.color}
                  onChangeComplete={this.handleChangeComplete}
                />
              <Label>Description</Label>
                <Input type="textarea"
                  value={this.state.description}
                  onChange={this.update('description')}
                />
              <SignUpButton type="submit">{this.props.formType}</SignUpButton>
          </Form>
        </HabitFormContainer>
      </Modal>
    );
  }
};

export default withRouter(HabitForm);
