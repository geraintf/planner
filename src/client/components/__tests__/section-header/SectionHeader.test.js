import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SectionHeader from '../../section-header/SectionHeader';

describe('SectionHeader', () => {
  const component = renderer.create(
    <SectionHeader text={'Test text'} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})


describe('Login Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SectionHeader text={'Test text'} />)
  });



  it('should render without throwing an error', () => {


  })
});