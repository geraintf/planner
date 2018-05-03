import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDayTodos } from '../../reducers';
import { toggleTodo, addTodo } from '../../actions';

import TodoList from '../components/todo/TodoList';

const mapStateToProps = state => ({
  todos: getDayTodos(state)
});

const DayTodoContainer = ({ todos, toggleTodo, addTodo }) => (
  <TodoList items={todos} toggleTodo={toggleTodo} addTodo={addTodo} />
);

DayTodoContainer.propsTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { toggleTodo, addTodo })(DayTodoContainer);
