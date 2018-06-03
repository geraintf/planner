import { TodoController } from '../controllers';

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
    updateTodo: (_, { todoContent, dateKey }, { user: { id } }) => {
      //return TodoController.updateTodo(id, dateKey, todoContent);
      return TodoController.updateTodo("5afe123d08150e47c45ee9e1", dateKey, todoContent);
    },
    updateComment: (_, { commentContent, dateKey }, { user: { id } }) => {
      //return TodoController.updateComment(id, dateKey, commentContent);
      return TodoController.updateComment("5afe123d08150e47c45ee9e1", dateKey, commentContent);
    },
  }
};

export default resolvers;