import { TodoController } from '../controllers';

//TODO: add a validate user function

const resolvers = {
  Query: {
    user: () => {

    },
    todo: (_, { dateKey }, { user: { id } }) => {
      //return TodoController.findEntry(id, dateKey);
      return TodoController.findEntry("5afe123d08150e47c45ee9e1", dateKey);
    }
  },
  Mutation: {
    syncTodos: (_, { input: { dateKey, payload } }, { user: { id } }) => {
      return TodoController.sync("5afe123d08150e47c45ee9e1", dateKey, payload);
    },
    updateComment: (_, { commentContent, dateKey }, { user: { id } }) => {
      //return TodoController.updateComment(id, dateKey, commentContent);
      return TodoController.updateComment("5afe123d08150e47c45ee9e1", dateKey, commentContent);
    },
  }
};

export default resolvers;