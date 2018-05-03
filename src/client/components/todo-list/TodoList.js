import React from 'react';
import PropTypes from 'prop-types';

import List from '../todo/todo-list/TodoList';
import TodoItem from '../todo/todo-item/TodoItem';

const TodoList = () => {
  const todos = [
    {
      id: 'fwefwef',
      checked: false,
      text: 'text'
    },
    {
      id: 'hrthrthrt',
      checked: false,
      text: 'text'
    },
    {
      id: 'fwefd2d2wef',
      checked: false,
      text: 'text'
    }
  ];

  return (
    <List>
      {
        todos.map((props) => {
          <TodoItem {...props} />;
        })
      }
    </List>

  );
};

TodoList.propTypes = {};

export default TodoList;
