import React from 'react';
import { shallow } from 'enzyme';
import { Input, Button } from 'reactstrap';

import AddTodo from '../../../todo/add-todo/AddTodo';

describe('AddTodo', () => {
  let output;
  let props;
  let addTodo;

  beforeEach(() => {
    addTodo = jest.fn();

    props = {
      addTodo
    };

    output = shallow(<AddTodo {...props} />);
  });

  it('should render correctly', () => {
    expect(output).toMatchSnapshot();
  });

  describe('given input is empty', () => {
    it('should not call addTodo', () => {
      output.setState({ value: '' });

      const input = output.find(Input);

      input.simulate('keypress', { type: 'keypress', key: 'x' });

      expect(addTodo).not.toHaveBeenCalled();
    });
  });

  describe('given the input is not empty', () => {
    describe('and a key is pressed', () => {
      describe('and the key is ENTER', () => {
        it('should call addTodo', () => {
          output.setState({ value: 'hey' });

          const input = output.find(Input);

          input.simulate('keypress', { type: 'keypress', key: 'Enter' });

          expect(addTodo).toHaveBeenCalledWith('hey');
          expect(output.state('value')).toEqual('');
        });
      });
    });

    describe('and the value in the input changes', () => {
      it('should update the state and the value of the input', () => {
        output.setState({ value: 'hey' });

        const input = output.find(Input);

        input.simulate('change', { target: { value: 'hey!' } });

        expect(output.state('value')).toEqual('hey!');
      });
    });

    describe('and the button is clicked', () => {
      it('should call addTodo', () => {
        output.setState({ value: 'hey' });

        const button = output.find(Button);

        button.simulate('click', { type: 'click' });

        expect(addTodo).toHaveBeenCalledWith('hey');
        expect(output.state('value')).toEqual('');
      });
    });
  });
});
