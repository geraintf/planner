import { format } from 'date-fns';

const formatTodoDateKey = date => format(date, 'DD-MM-YYYY').toString();

export {
  formatTodoDateKey
};
