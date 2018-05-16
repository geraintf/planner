import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../../layout/Layout';

const mockChild = <span>Some Child Content</span>;

describe('Layout', () => {
  let output;

  beforeEach(() => {
    output = shallow(<Layout>{ mockChild }</Layout>);
  });

  it('should render correctly', () => {
    expect(output).toMatchSnapshot();
  });
});

