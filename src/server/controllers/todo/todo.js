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

  findAndUpdate(id, property, value) {
    return this.model
      .findByIdAndUpdate(
        id,
        { $set: { [property]: value } },
        { new: true }
      );
  }

  updateTodo(owner, dateKey, newTodos) {
    return this.findEntry(owner, dateKey)
      .then((existingTodo) => {
        if (existingTodo) {
          return this.findAndUpdate(
            existingTodo.id,
            'todos',
            newTodos
          );
        }

        return this.createEntry(owner, dateKey, newTodos);
      });
  }

  updateComment(owner, dateKey, commentsContent) {
    return this.findEntry(owner, dateKey)
      .then((existingTodo) => {
        if (existingTodo) {
          return this.findAndUpdate(
            existingTodo.id,
            'comments',
            commentsContent
          );
        }

        return this.createEntry(owner, dateKey, null, commentsContent);
      });
  }
}

export default new TodoController();
