import { TodoController } from '../controllers';

//TODO: add a validate user function

const resolvers = {
  Query: {
    user: () => {

    },
    todo: (_, { dateKey }, { user: { id } }) => {
      return TodoController.findEntry("5afe123d08150e47c45ee9e1", dateKey);
    }
  },
  Mutation: {
    syncTodos: (_, { input: { dateKey, payload } }, { user: { id } }) => {
      return TodoController.syncTodos("5afe123d08150e47c45ee9e1", dateKey, payload);
    },
    syncNotes: (_, { input: { content, dateKey } }, { user: { id } }) => {
      return TodoController.syncNotes("5afe123d08150e47c45ee9e1", dateKey, content);
    },
  }
};

export default resolvers;