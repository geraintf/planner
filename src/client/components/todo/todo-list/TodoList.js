import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.scss';

import TodoItem from '../todo-item/TodoItem';

const TodoList = ({
  items,
  toggleTodo,
  sortable
}) => (
  <ul className="todo-list">
    {
      items.map((itemProps, index) => (
        <TodoItem
          key={itemProps.todoId}
          {...itemProps}
          onClick={() => toggleTodo(itemProps.todoId)}
          sortable={sortable}
          index={index}
        />
      ))
    }
  </ul>
);

TodoList.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool
  })).isRequired,
  sortable: PropTypes.bool
};

TodoList.defaultProps = {
  sortable: false
};

export default TodoList;
