import uuidv4 from 'uuid/v4';
import { arrayMove } from 'react-sortable-hoc';

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


export const getDayTodos = state => state.todos;


export default function reducer(state = {}, { type, payload }) {
  switch (type) {
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: toggleTodo(state.todos, payload.id)
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            text: payload.text,
            completed: false
          }]
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload.id)
      };
    case 'MOVE_TODO':
      return {
        ...state,
        todos: arrayMove(state.todos, payload.oldIndex, payload.newIndex)
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: editTodo(state.todos, payload.id, payload.newValue)
      };
    default:
      return state;
  }
}
