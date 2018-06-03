import { TodoModel } from '../../models';
import { formatTodoDateKey } from "../../../utils/date-utils";

class TodoController {
  constructor() {
    this.model = TodoModel;
  }

  createOrUpdate(owner, date, newTodos) {
    const dateKey = formatTodoDateKey(date);

    return this.model
      .findOne()
      .where({ owner, date: dateKey })
      .then((existingTodo) => {
        if (existingTodo) {
          return this.model
            .findByIdAndUpdate(
              existingTodo.id,
              { $set: { todos: newTodos } },
              { new: true }
            );
        }

        return this.model
          .create({
            owner,
            date: dateKey,
            todos: newTodos
          });
      });
  }
}

export default new TodoController();
