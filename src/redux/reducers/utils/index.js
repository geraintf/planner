import uuidv4 from 'uuid/v4';
import { arrayMove } from 'react-sortable-hoc';

import { getDayTodos } from '../../selectors';

import { syncDayTodos } from '../../../services/requests';

export const toggleTodos = (state, todoId) => {
  const toggle = (todos,id) => todos.map(todo => (
    todo.todoId === id
      ? { ...todo, completed: !todo.completed }
      : todo
  ));

  const updatedTodos = {
    ...state.todos,
    [state.selectedDate]: toggle(getDayTodos(state), todoId)
  };

  syncDayTodos(state.selectedDate, updatedTodos[state.selectedDate]);

  return {
    ...state,
    todos: updatedTodos
  };
};

export const addTodo = (state, text) => {
  const newTodo = {
    todoId: uuidv4(),
    text,
    completed: false
  };

  const updatedTodos = {
    ...state.todos,
    [state.selectedDate]: [...getDayTodos(state)].concat([newTodo])
  };

  syncDayTodos(state.selectedDate, updatedTodos[state.selectedDate]);

  return {
    ...state,
    todos: updatedTodos
  };
};


export const removeTodo = (state, todoId) => {
  const updatedTodos = {
    ...state.todos,
    [state.selectedDate]: getDayTodos(state).filter(todo => todo.todoId !== todoId)
  };

  syncDayTodos(state.selectedDate, updatedTodos[state.selectedDate]);

  return {
    ...state,
    todos: updatedTodos
  };
};

export const moveTodo = (state, oldIndex, newIndex) => {
  const updatedTodos = {
    ...state.todos,
    [state.selectedDate]: arrayMove(getDayTodos(state), oldIndex, newIndex)
  };

  syncDayTodos(state.selectedDate, updatedTodos[state.selectedDate]);

  return {
    ...state,
    todos: updatedTodos
  };
};

export const editTodo = (state, todoId, newValue) => {
  const edit = (todos, id, newValue) =>
    todos.map(todo => {
      if (todo.todoId === id) todo.text = newValue;

      return todo;
    });

  const updatedTodos = {
    ...state.todos,
    [state.selectedDate]: edit(getDayTodos(state), todoId, newValue)
  };

  syncDayTodos(state.selectedDate, updatedTodos[state.selectedDate]);

  return {
    ...state,
    todos: updatedTodos
  };
};
