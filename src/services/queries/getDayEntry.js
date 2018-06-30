import { formatTodoDateKey } from '../../utils/date-utils';

const getDayEntry = (date = formatTodoDateKey(Date.now())) => `query {
  todo(dateKey: "${date}") {
    id
    todos {
      todoId
      text
      completed
    }
    date
    comments
  }
}`;

export default getDayEntry;
