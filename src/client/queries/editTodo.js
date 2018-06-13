const editTodo = () => `mutation editTodo($input: EditTodoInput!) {
    editTodo(input: $input) {
      id
      date
      todos {
        id: todoId
        text
        completed
      }
    }
  }`;

export default editTodo;
