import { TodoModel } from '../../models';
import { formatTodoDateKey } from "../../../utils/date-utils";

class TodoController {
  constructor() {
    this.model = TodoModel;
  }

  add(owner, date, newTodo) {
    const dateKey = formatTodoDateKey(date);

    return this.model
      .findOne()
      .where({ owner, date: dateKey })
      .then((existingTodo) => {
        if (existingTodo) {
          return this.model
            .findByIdAndUpdate(
              existingTodo.id,
              { $set: { todos: existingTodo.push(newTodo) } }
            );
        }

        return this.model
          .create({
            owner,
            date: dateKey,
            todos: [newTodo]
          });
      });
  }

  delete() {
    //todo
  }

  edit() {
    //todo
  }
}

export default new TodoController();
