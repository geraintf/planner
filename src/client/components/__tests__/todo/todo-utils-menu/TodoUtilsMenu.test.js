import React from 'react';
import { shallow } from 'enzyme';

import { unwrapComponent } from '../../../../../../test/utils/unwrap';

import WrappedTodoUtilsMenu from '../../../todo/todo-utils-menu/TodoUtilsMenu';
const TodoUtilsMenu = unwrapComponent(WrappedTodoUtilsMenu);

describe('TodoUtilsMenu', () => {
  let output;
  let props;

  beforeEach(() => {
    props = {
      removeTodo: jest.fn(() => {}),
      toggleEditing: jest.fn(() => {}),
      todoId: '123456789'
    };
    output = shallow(<TodoUtilsMenu {...props} />);
  });

  it('should render correctly', () => {
    expect(output).toMatchSnapshot();
  });

  it('should render a dropdown toggle and dropdown menu', () => {
    expect(
      output
        .find('DropdownToggle')
        .length
    ).toEqual(1);

    expect(
      output
        .find('DropdownMenu')
        .length
    ).toEqual(1);
  });

  it('should two menu items', () => {
    expect(
      output
        .find('.todo-utils-menu__item')
        .length
    ).toEqual(2);
  });

  it('should toggle the open state of the dropdown', () => {
    output
      .find('DropdownToggle')
      .simulate('click');

    expect(output.state('open')).toEqual(true);
  });

  it('should handle the removing of a todo', () => {
    output
      .find('.remove-item')
      .simulate('click');

    expect(output.state('open')).toEqual(true);
    expect(props.removeTodo).toHaveBeenCalled();
  });

  it('should handle the edit toggling', () => {
    output
      .find('.edit-item')
      .simulate('click');

    expect(output.state('open')).toEqual(true);
    expect(props.toggleEditing).toHaveBeenCalled();
  });
});
