import uuidv4 from 'uuid/v4';

const toggleTodo = (todos, id) => (
  todos.map(todo => (
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  ))
);


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
    default:
      return state;
  }
}