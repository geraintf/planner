import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import './TodoUtilsMenu.scss';
import { removeTodo } from 'src/redux/actions';

class TodoUtilsMenu extends Component {
  static propTypes = {
    removeTodo: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    todoId: PropTypes.string.isRequired
  };

  state = {
    open: false
  };

  toggle = () => this.setState({ open: !this.state.open });

  handleRemove = () => {
    const todoId = this.props.todoId;
    this.props.removeTodo(todoId);

    this.toggle();
  };

  handleEdit = () => {

    this.props.toggleEditing();
    this.toggle();
  };

  render() {
    return (
      <Dropdown
        isOpen={this.state.open}
        toggle={this.toggle}
        className="todo-utils-menu"
      >
        <DropdownToggle
          tag="a"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.open}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </DropdownToggle>
        <DropdownMenu right>
          <div
            className="todo-utils-menu__item edit-item"
            onClick={this.handleEdit}
          >
            <div className="todo-utils-menu__item-icon">
              <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="todo-utils-menu__item-text">
              Edit
            </div>
          </div>
          <div
            className="todo-utils-menu__item remove-item"
            onClick={this.handleRemove}
          >
            <div className="todo-utils-menu__item-icon">
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className="todo-utils-menu__item-text">
              Delete
            </div>
          </div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default connect(null, { removeTodo })(TodoUtilsMenu)
