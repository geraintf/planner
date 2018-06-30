
export const getDayTodos = state => state.todos[state.selectedDate] || [];

export const getIsAuthenticated = state => state.isAuthenticated;
