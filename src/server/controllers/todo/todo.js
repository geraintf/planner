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

  sync(owner, dateKey, payload) {
    return this.findEntry(owner, dateKey)
      .then((dayEntry) => {
        if (dayEntry) {
          return this.model
            .findByIdAndUpdate(
              dayEntry.id,
              { todos: payload },
              { new: true }
            );
        }

        return this.createEntry(owner, dateKey, payload);
      });
  }
}

export default new TodoController();
