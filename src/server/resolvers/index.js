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
    addTodo: (_, { input: { newTodo, dateKey } }, { user: { id } }) => {
      //return TodoController.addTodo(id, dateKey, newTodo);
      return TodoController.addTodo("5afe123d08150e47c45ee9e1", dateKey, newTodo);
    },
    deleteTodo: (_, { input: { todoId, dateKey } }, { user: { id } }) => {
      //return TodoController.deleteTodo(id, dateKey, todoId);
      return TodoController.deleteTodo("5afe123d08150e47c45ee9e1", dateKey, todoId);
    },
    editTodo: (_, { input: { todoId, todoValue, dateKey } }, { user: { id } }) => {
      //return TodoController.editTodo(id, dateKey, todoId, todoValue);
      return TodoController.editTodo("5afe123d08150e47c45ee9e1", dateKey, todoId, todoValue);
    },
    toggleTodo: (_, { input: { todoId, dateKey } }, { user: { id } }) => {
      //return TodoController.toggleTodo(id, dateKey, todoId);
      return TodoController.toggleTodo("5afe123d08150e47c45ee9e1", dateKey, todoId);
    },
    moveTodo: (_, { input: { todoId, dateKey, oldIndex, newIndex } }, { user: { id } }) => {
      //return TodoController.moveTodo(id, dateKey, todoId, oldIndex, newIndex);
      return TodoController.moveTodo("5afe123d08150e47c45ee9e1", dateKey, todoId, oldIndex, newIndex);
    },
    updateComment: (_, { commentContent, dateKey }, { user: { id } }) => {
      //return TodoController.updateComment(id, dateKey, commentContent);
      return TodoController.updateComment("5afe123d08150e47c45ee9e1", dateKey, commentContent);
    },
  }
};

export default resolvers;