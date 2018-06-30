
export const getDayTodos = state => state.todos[state.selectedDate] || [];

export const getNotes = state => state.notes;

export const getIsAuthenticated = state => state.isAuthenticated;
