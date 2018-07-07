import React from 'react';
import { shallow } from 'enzyme';
import Bone from './Bone';

describe('Bone', () => {
  test('Bone renders without exploding', () => {
    const wrapper = shallow(<Bone />);
    expect(wrapper.length).toEqual(1);
  });
});