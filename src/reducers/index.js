import uuidv4 from 'uuid/v4';
import { arrayMove } from 'react-sortable-hoc';

import {
  addTodoReq,
  deleteTodoReq,
  toggleTodoReq,
  moveTodoReq,
  editTodoReq
} from '../client/requests';

const toggleTodo = (todos, id) => (
  todos.map(todo => (
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  ))
);

const editTodo = (todos, id, newValue) => {
  return todos.map(todo => {
    if (todo.id === id) {
      todo.text = newValue;
    }

    return todo;
  });
};

export const getDayTodos = state => state.todos[state.selectedDate] || [];

export default function reducer(state = {}, { type, payload }) {
  switch (type) {
    case 'TOGGLE_TODO':

      toggleTodoReq(state.selectedDate, payload.id);
      return {
        ...state,
        todos: toggleTodo(state.todos, payload.id)
      };
    case 'ADD_TODO':
      const newTodo = {
        todoId: uuidv4(),
        text: payload.text,
        completed: false
      };

      addTodoReq(state.selectedDate, newTodo);

      return {
        ...state,
        todos: {
          ...state.todos,
          [state.selectedDate]: [...state.todos[state.selectedDate]].concat([newTodo])
        }
      };
    case 'REMOVE_TODO':

      deleteTodoReq(state.selectedDate, payload.id);

      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload.id)
      };
    case 'MOVE_TODO':

      moveTodoReq(state.selectedDate, payload.oldIndex, payload.newIndex);

      return {
        ...state,
        todos: arrayMove(state.todos, payload.oldIndex, payload.newIndex)
      };
    case 'EDIT_TODO':

      //TODO request calls everytime something changes - debounce or something

      editTodoReq(state.selectedDate, payload.id, payload.newValue);

      return {
        ...state,
        todos: editTodo(state.todos, payload.id, payload.newValue)
      };
    default:
      return state;
  }
}
