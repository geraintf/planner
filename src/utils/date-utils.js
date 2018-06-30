import { format } from 'date-fns';

const DATE_FORMAT = 'DD-MM-YYYY';

const formatTodoDateKey = date => format(date, DATE_FORMAT).toString();

export {
  formatTodoDateKey
};
