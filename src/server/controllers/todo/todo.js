import { arrayMove } from 'react-sortable-hoc';

import { TodoModel } from '../../models';

class TodoController {
  constructor() {
    this.model = TodoModel;
  }

  findEntry(owner, dateKey) {
    return this.model
      .findOne()
      .where({ owner, date: dateKey });
  }

  createEntry(owner, dateKey, todos = [], comments = '') {
    return this.model
      .create({
        owner,
        date: dateKey,
        todos,
        comments
      });
  }

  // findAndUpdate(id, property, value) {
  //   return this.model
  //     .findByIdAndUpdate(
  //       id,
  //       { $set: { [property]: value } },
  //       { new: true }
  //     );
  // }

  addTodo(owner, dateKey, newTodo) {
    return this.findEntry(owner, dateKey)
      .then((dayEntry) => {
        if (dayEntry) {
          return this.model
            .findByIdAndUpdate(
              dayEntry.id,
              { $push: { todos: newTodo } },
              { new: true }
            );
        }

        return this.createEntry(owner, dateKey, [newTodo]);
      });
  }

  editTodo(owner, dateKey, todoId, todoValue) {
    return this.findEntry(owner, dateKey)
      .then((dayEntry) => {
        // TODO: error handling
        if (dayEntry) {
          return this.model.findOneAndUpdate(
            { 'todos.todoId': todoId },
            { $set: { 'todos.$.text': todoValue } },
            { new: true }
          );
        }
      });
  }

  deleteTodo(owner, dateKey, todoId) {
    return this.findEntry(owner, dateKey)
      .then((dayEntry) => {
        // TODO: error handling
        if (dayEntry) {
          return this.model
            .findByIdAndUpdate(
              dayEntry.id,
              { $pull: { todos: { todoId } } },
              { new: true }
            );
        }
      });
  }

  moveTodo(owner, dateKey, todoId, oldIndex, newIndex) {
    return this.findEntry(owner, dateKey)
      .then((dayEntry) => {
        // TODO: error handling
        if (dayEntry) {
          const newTodos = arrayMove(dayEntry.todos, oldIndex, newIndex);

          return this.model
            .findByIdAndUpdate(
              dayEntry.id,
              { $set: { todos: newTodos } },
              { new: true }
            );
        }
      });
  }

  toggleTodo(owner, dateKey, todoId) {
    return this.findEntry(owner, dateKey)
      .then((dayEntry) => {
        // TODO: error handling
        if (dayEntry) {
          const currentState = dayEntry.todos.find(todo => todo.todoId === todoId).completed;

          return this.model.findOneAndUpdate(
            { 'todos.todoId': todoId },
            { $set: { 'todos.$.completed': !currentState } },
            { new: true }
          );
        }
      });
  }

  // updateComment(owner, dateKey, commentsContent) {
  //   return this.findEntry(owner, dateKey)
  //     .then((existingTodo) => {
  //       if (existingTodo) {
  //         return this.findAndUpdate(
  //           existingTodo.id,
  //           'comments',
  //           commentsContent
  //         );
  //       }
  //
  //       return this.createEntry(owner, dateKey, null, commentsContent);
  //     });
  // }
}

export default new TodoController();
