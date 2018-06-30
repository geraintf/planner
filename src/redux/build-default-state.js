import { formatTodoDateKey } from '../utils/date-utils';

export default () => ({
  user: {},
  todos: {},
  notes: '',
  selectedDate: formatTodoDateKey(Date.now())
});
