import React from 'react';
import { withRouter } from 'react-router-dom';
import { TwitterPicker } from 'react-color';
import {
  Errors
} from '../errors/styled_errors';

import {
  Form,
  Greeting,
  HabitFormContainer,
  Input,
  Label,
  AddHabit,
  Submit
} from './styled_habit_form';

class HabitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '',
      duration: '',
      description: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    this.pickColor = this.pickColor.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  pickColor(colour) {
    this.setState({ color: colour.hex });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const habit = Object.assign({}, this.state);
    this.props.processForm(habit).then(() => this.closeWindow());
  }

  closeWindow () {
    this.props.history.push('/');
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
        <HabitFormContainer>
          <Form onSubmit={this.handleSubmit}>
            <Greeting>Add New Habit</Greeting>
            {this.renderErrors()}
            <Label>Name</Label>
            <Input type="text"
              value={this.state.name}
              onChange={this.update('name')}
            />

            <Label>Color:</Label>
                <TwitterPicker
                  color={this.state.color}
                  onChangeComplete={this.pickColor}
                />
              <Label>Description</Label>
                <Input type="textarea"
                  value={this.state.description}
                  onChange={this.update('description')}
                />
              <AddHabit type="submit">Add {this.props.formType}
              </AddHabit>
          </Form>
        </HabitFormContainer>
    );
  }
};

export default withRouter(HabitForm);
