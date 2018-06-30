import { formatTodoDateKey } from '../utils/date-utils';

export default () => ({
  user: {},
  todos: {},
  selectedDate: formatTodoDateKey(Date.now())
});
