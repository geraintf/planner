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

  createEntry(owner, dateKey, { todos = [], notes = '' }) {
    return this.model
      .create({
        owner,
        date: dateKey,
        todos,
        notes
      });
  }

  sync(owner, dateKey, property, value) {
    return this.findEntry(owner, dateKey)
      .then((dayEntry) => {
        if (dayEntry) {
          return this.model
            .findByIdAndUpdate(
              dayEntry.id,
              { [property]: value },
              { new: true }
            );
        }

        return this.createEntry(owner, dateKey, { [property]: value });
      });
  }

  syncTodos(owner, dateKey, value) {
    return this.sync(owner, dateKey, 'todos', value);
  }

  syncNotes(owner, dateKey, value) {
    return this.sync(owner, dateKey, 'notes', value);
  }
}

export default new TodoController();
