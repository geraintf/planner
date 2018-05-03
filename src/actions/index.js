
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: {
    id
  }
});

export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    text
  }
});
