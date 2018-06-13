const toggleTodo = () => `mutation toggleTodo($input: ToggleTodoInput!) {
    toggleTodo(input: $input) {
      id
      date
      todos {
        id: todoId
        text
        completed
      }
    }
  }`;

export default toggleTodo;
