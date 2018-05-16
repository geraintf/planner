import React from 'react';
import { shallow } from 'enzyme';

import SectionHeader from '../../section-header/SectionHeader';

describe('SectionHeader', () => {
  let output;
  let props;

  beforeEach(() => {
    props = {
      text: "test text"
    };
    output = shallow(<SectionHeader {...props} />);
  });

  it('should render correctly', () => {
    expect(output).toMatchSnapshot();
  });
});

