const typeDefs = `
  type Query { user: User }
  
  type User { 
    id: ID!
    firstName: String 
    secondName: String
  }
`;

export default typeDefs;
