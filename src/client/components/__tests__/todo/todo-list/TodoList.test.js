import React from 'react';
import { shallow } from 'enzyme';

import TodoList from '../../../todo/todo-list/TodoList';

import mockTodos from '../../../../../../test/mock-data/mock-todos';

describe('TodoList', () => {
  let output;
  let props;

  beforeEach(() => {
    props = {
      items: mockTodos,
      toggleTodo: () => {}
    };
    output = shallow(<TodoList {...props} />);
  });

  it('should render correctly', () => {
    expect(output).toMatchSnapshot();
  });
});
