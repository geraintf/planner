const syncTodos = () => `mutation syncTodos($input: SyncTodoInput!) {
    syncTodos(input: $input) {
      id
      date
      notes
      todos {
        todoId
        text
        completed
      }
    }
  }`;

export default syncTodos;
