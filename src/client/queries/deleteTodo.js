const deleteTodo = () => `mutation deleteTodo($input: DeleteTodoInput!) {
    deleteTodo(input: $input) {
      id
      date
      todos {
        id: todoId
        text
        completed
      }
    }
  }`;

export default deleteTodo;
