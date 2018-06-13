const moveTodo = () => `mutation moveTodo($input: MoveTodoInput!) {
    moveTodo(input: $input) {
      id
      date
      todos {
        id: todoId
        text
        completed
      }
    }
  }`;

export default moveTodo;
