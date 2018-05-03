import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './TodoList.less';

import Todo from './Todo';
import AddTodo from './AddTodo';

const TodoList = ({ items, toggleTodo, addTodo }) => (
  <Fragment>
    <ul className="todo-list">
      {
        items.map(({ id, ...props }) => (
          <Todo
            key={id}
            {...props}
            onClick={() => toggleTodo(id)}
          />
        ))
      }
    </ul>
    <AddTodo addTodo={addTodo} />
  </Fragment>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool
  })).isRequired
};

export default TodoList;
