import React from 'react';
import PropTypes from 'prop-types';

import List from '../todo/TodoList';
import Todo from '../todo/Todo';

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
          <Todo {...props} />
        })
      }
    </List>

  )

};

TodoList.propTypes = {};

export default TodoList;