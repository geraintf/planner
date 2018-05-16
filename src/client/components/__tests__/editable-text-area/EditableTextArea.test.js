import React from 'react';
import { mount } from 'enzyme';

import EditableTextArea from '../../editable-text-area/EditableTextArea';

describe('EditableTextArea', () => {
  let output;
  let props;

  beforeEach(() => {
    props = {
      text: "test text",
      onBlur: () => {},
      onChange: () => {},
      onKeyPress: () => {}
    };
    output = mount(<EditableTextArea {...props} />);
  });

  it('should render correctly', () => {
    expect(output).toMatchSnapshot();
  });

  it('should have focus on mounting', () => {
    const textArea = output.find('textarea');
    const focusedElement = document.activeElement;

    expect(textArea.matchesElement(focusedElement)).toEqual(true);
  });
});
