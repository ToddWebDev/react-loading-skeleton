import React from 'react';
import { shallow } from 'enzyme';
import Skull from './Skull';

describe('Skull', () => {
  test('Skull renders without exploding', () => {
    const wrapper = shallow(<Skull />);
    expect(wrapper.length).toEqual(1);
  });
});