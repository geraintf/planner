const typeDefs = `
  type Query { 
    user: User, 
    todo(dateKey: String!): Todo 
  }
  
  type Mutation {
    syncTodos(input: SyncTodoInput!): Todo    
  
    syncNotes(input: SyncNotesInput!) : Todo
  }
  
  type User { 
    id: ID!
    firstName: String 
    secondName: String
  }
  
  type Todo {
    id: ID!
    date: String
    owner: String
    todos: [TodoItem]
    notes: String
  }
  
  type TodoItem {
    id: String
    todoId: String
    text: String
    completed: Boolean
  }
  
  input SyncTodoInput {
    dateKey: String!
    payload: [SyncTodoInputItem]!
  }
  
  input SyncTodoInputItem {
    todoId: String
    text: String
    completed: Boolean
  }
  
  input SyncNotesInput {
    dateKey: String!
    content: String!
  }
`;

export default typeDefs;
