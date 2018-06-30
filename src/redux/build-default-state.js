import { formatTodoDateKey } from 'src/utils/date-utils';

export default () => ({
  user: {},
  todos: {},
  notes: '',
  selectedDate: formatTodoDateKey(Date.now())
});
