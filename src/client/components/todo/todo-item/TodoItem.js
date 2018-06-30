import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLines from '@fortawesome/fontawesome-free-solid/faAlignJustify';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

import { editTodo } from '../../../../redux/actions';
import { decodeString } from '../../../../utils/string-utils';
import './TodoItem.scss';
import TodoUtilsMenu from "../todo-utils-menu/TodoUtilsMenu";
import EditableTextArea from '../../editable-text-area/EditableTextArea';

class TodoItem extends Component {
  static propTypes = {
    completed: PropTypes.bool,
    editTodo: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    todoId: PropTypes.string.isRequired
  };

  static defaultProps = {
    completed: false,
    sortable: false
  };

  state = {
    editing: false
  };

  toggleEditing = () => this.setState({ editing: !this.state.editing });

  handleEdit = (event) => this.props.editTodo(this.props.todoId, event.target.value);

  handleKeyPress = (event) => {
    if (event.type === 'keypress' && event.key === 'Enter') {
      this.toggleEditing();
    }
  };

  render() {
    const {
      text,
      completed,
      onClick,
      index,
      todoId
    } = this.props;

    const TodoField = () => {

      const decodedText = decodeString(text);

      if (this.state.editing) {
        return <EditableTextArea
          onBlur={this.toggleEditing}
          onChange={this.handleEdit}
          onKeyPress={this.handleKeyPress}
          text={decodedText}
        />;
      } else {
        return decodedText;
      }

    };

    const MoveIcon = SortableHandle(() => (
      <div className="todo-item__move">
        <FontAwesomeIcon icon={faLines} />
      </div>
    ));

    const TodoContent = SortableElement(() => (
      <li className={classnames('todo-item', { completed })}>
        <button
          onClick={onClick}
        >
          {
            completed &&
            <FontAwesomeIcon icon={faCheck} />
          }
        </button>
        <span
          className="todo-item__content"
          onDoubleClick={this.toggleEditing}
        >
          <TodoField />
        </span>

        <div className="todo-item__utils">
          <TodoUtilsMenu todoId={todoId} toggleEditing={this.toggleEditing} />
          <MoveIcon />
        </div>
      </li>
    ));

    return <TodoContent key={`item-${index}`} index={index} />;
  }
}

export default connect(null, { editTodo })(TodoItem)
