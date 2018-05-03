import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import { encodeString } from '../../../../shared/string-utils';

import './AddTodo.less';

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  state = {
    value: ''
  };

  handleAdd = (event) => {
    const { value } = this.state;

    if (value !== '') {
      if (
        (event.type === 'keypress' && event.key === 'Enter')
        || event.type === 'click'
      ) {

        this.props.addTodo(encodeString(value));
        this.setState({
          value: ''
        });
      }
    }
  };

  handleClick = (event) => {
    event.preventDefault();

    this.handleAdd(event);
  };

  handleOnChange = (event) => this.setState({ value: event.target.value });

  render() {
    return (
      <div className="add-todo">
        <Input
          placeholder="What do you need to get done?"
          onKeyPress={this.handleAdd}
          onChange={this.handleOnChange}
          value={this.state.value}
        />
        <Button
          color="secondary"
          onClick={this.handleAdd}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    )
  }
}

