import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDayTodos } from '../../reducers';
import {
  toggleTodo,
  addTodo,
  moveTodo
} from '../../actions';

import TodoContainer from '../components/todo/todo-container/TodoContainer';

const mapStateToProps = state => ({
  todos: getDayTodos(state)
});

const DayTodoContainer = ({
  todos,
  toggleTodo,
  addTodo,
  moveTodo
}) => (
  <TodoContainer
    items={todos}
    toggleTodo={toggleTodo}
    addTodo={addTodo}
    moveTodo={moveTodo}
  />
);

DayTodoContainer.propsTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  moveTodo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { toggleTodo, addTodo, moveTodo })(DayTodoContainer);
