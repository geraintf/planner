import { formatTodoDateKey } from 'src/utils/date-utils';

const getDayEntry = (date = formatTodoDateKey(Date.now())) => `query {
  todo(dateKey: "${date}") {
    id
    date
    notes
    todos {
      todoId
      text
      completed
    }
  }
}`;

export default getDayEntry;
