import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import AddTodo from '../add-todo/AddTodo';
import SortableTodoList from '../SortableTodoList';

const TodoContainer = ({ addTodo, toggleTodo, items, moveTodo }) => (
  <Fragment>
    <SortableTodoList
      toggleTodo={toggleTodo}
      items={items}
      moveTodo={moveTodo}
    />
    <AddTodo addTodo={addTodo} />
  </Fragment>
);

TodoContainer.propTypes = {
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  moveTodo: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool
  })).isRequired,
};

export default TodoContainer;
