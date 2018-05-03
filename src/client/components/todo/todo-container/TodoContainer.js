import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import AddTodo from '../add-todo/AddTodo';
import TodoList from '../todo-list/TodoList';
import SortableTodoList from '../SortableTodoList';

const TodoContainer = ({ addTodo, sortable, toggleTodo, items, moveTodo }) => {

  const list = sortable
    ? (
      <SortableTodoList
        toggleTodo={toggleTodo}
        items={items}
        moveTodo={moveTodo}
      />)
    : (<TodoList toggleTodo={toggleTodo} items={items} />);

  return (
    <Fragment>
      { list }
      <AddTodo addTodo={addTodo} />
    </Fragment>
  );

};

TodoContainer.propTypes = {
  addTodo: PropTypes.func.isRequired,
  sortable: PropTypes.bool,
  toggleTodo: PropTypes.func.isRequired,
  moveTodo: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool
  })).isRequired,
};

TodoContainer.defaultProps = {
  sortable: false
};

export default TodoContainer;
