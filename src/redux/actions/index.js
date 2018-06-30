
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const MOVE_TODO = 'MOVE_TODO';
const EDIT_TODO = 'EDIT_TODO';

const actionTypes = {
  TOGGLE_TODO,
  ADD_TODO,
  REMOVE_TODO,
  MOVE_TODO,
  EDIT_TODO
};

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});

const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text
  }
});

const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
});

const moveTodo = (oldIndex, newIndex) => ({
  type: MOVE_TODO,
  payload: {
    oldIndex,
    newIndex
  }
});

const editTodo = (id, newValue) => ({
  type: EDIT_TODO,
  payload: {
    id,
    newValue
  }
});

export {
  toggleTodo,
  addTodo,
  removeTodo,
  moveTodo,
  editTodo,
  actionTypes
};
