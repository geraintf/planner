import React from 'react';
import  { shallow } from 'enzyme';

import { unwrapComponent } from '../../../../../../test/utils/unwrap';

import WrappedTodoItem from '../../../todo/todo-item/TodoItem';
import EditableTextArea from '../../../editable-text-area/EditableTextArea';

const TodoItem = unwrapComponent(WrappedTodoItem);

describe('TodoItem', () => {
  let output;
  let props;

  beforeEach(() => {
    props = {
      editTodo: () => {},
      onClick: () => {},
      completed: false,
      text: 'oh hey didnt see you there',
      index: 0,
      id: '123'

    };
    output = shallow(<TodoItem {...props} />);
  });

  it('should render correctly', () => {
    expect(output.dive()).toMatchSnapshot();
  });

  describe('given the todo item is being edited', () => {
    it('should render just the EditableTextArea ', () => {
      output.setState({ editing: true });

      const todoField = output.dive().find('TodoField').dive();

      expect(todoField.type()).toEqual(EditableTextArea);
    });
  });

  describe('given the todo item is not being edited', () => {
    it('should render just the todo text ', () => {
      output.setState({ editing: false });

      const todoField = output.dive().find('TodoField').dive();

      expect(todoField.text()).toEqual('oh hey didnt see you there');
    });
  });
});
