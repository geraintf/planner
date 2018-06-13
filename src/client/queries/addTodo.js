const addTodo = () => `mutation addTodo($input: AddTodoInput!) {
    addTodo(input: $input) {
      id
      date
      todos {
        id: todoId
        text
        completed
      }
    }
  }`;

export default addTodo;
