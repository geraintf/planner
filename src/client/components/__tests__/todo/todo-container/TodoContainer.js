import React from 'react';
import  { shallow } from 'enzyme';

import TodoContainer from '../../../todo/todo-container/TodoContainer';

describe('TodoContainer', () => {
  let output;
  let props;
  beforeEach(() => {
    props = {
      addTodo: () => {},
      toggleTodo: () => {},
      moveTodo: () => {},
      items: [{
        id: '123',
        text: 'some stuff',
        completed: true
      }]
    };
    output = shallow(<TodoContainer {...props} />);
  });

  it('should render correctly', () => {
    expect(output).toMatchSnapshot();
  });
});
