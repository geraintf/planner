import { actionTypes } from '../actions';

import {
  toggleTodos,
  addTodo,
  removeTodo,
  moveTodo,
  editTodo
} from './utils';

export default function reducer(state = {}, { type, payload }) {
  switch (type) {
    case actionTypes.TOGGLE_TODO:

      return toggleTodos(state, payload.id);

    case actionTypes.ADD_TODO:

      return addTodo(state, payload.text);

    case actionTypes.REMOVE_TODO:

      return removeTodo(state, payload.id);

    case actionTypes.MOVE_TODO:

      return moveTodo(state, payload.oldIndex, payload.newIndex);

    case actionTypes.EDIT_TODO:

      //TODO request calls everytime something changes - debounce or something

      return editTodo(state, payload.id, payload.newValue);

    default:
      return state;
  }
}
