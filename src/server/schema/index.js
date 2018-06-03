const typeDefs = `
  type Query { 
    user: User, 
    todo(dateKey: String!): Todo 
  }
  
  type Mutation {  
    updateTodo(
      dateKey: String!
      todoContent: [String]!
    ): Todo
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
    date: String
    owner: String
    todos: [String]
    comments: String
  }
`;

export default typeDefs;
