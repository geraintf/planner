const typeDefs = `
  type Query { 
    user: User, 
    todo(dateKey: String!): Todo 
  }
  
  type Mutation {  
    addTodo(input: AddTodoInput!): Todo
    
    deleteTodo(input: DeleteTodoInput!): Todo
    
    editTodo(input: EditTodoInput!): Todo
    
    toggleTodo(input: ToggleTodoInput!): Todo
    
    moveTodo(input: MoveTodoInput!): Todo
    
    updateComment(
      dateKey: String!
      commentContent: String!
    ) : Todo
  }
  
  type User { 
    id: ID!
    firstName: String 
    secondName: String
  }
  
  type Todo {
    id: ID!
    todoId: String
    date: String
    owner: String
    todos: [TodoItem]
    comments: String
  }
  
  type TodoItem {
    id: String
    todoId: String
    text: String
    completed: Boolean
  }
  
  input AddTodoInput {
    dateKey: String!
    newTodo: AddTodoInputItem!
  }
  
  input AddTodoInputItem {
    text: String
    completed: Boolean
  }
  
  input DeleteTodoInput {
    dateKey: String!
    todoId: String!
  }
  
  input ToggleTodoInput {
    dateKey: String!
    todoId: String!
  }
  
  input EditTodoInput {
    dateKey: String!
    todoId: String!
    todoValue: String!
  }
  
  input MoveTodoInput {
    dateKey: String!
    todoId: String!
    oldIndex: Int!
    newIndex: Int!
  }
`;

export default typeDefs;
