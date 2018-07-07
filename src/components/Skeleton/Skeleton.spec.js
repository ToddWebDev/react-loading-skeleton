import React from 'react';
import { shallow } from 'enzyme';
import Skeleton from './Skeleton';

describe('Skeleton', () => {
  test('Skeleton renders without exploding', () => {
    const wrapper = shallow(<Skeleton />);
    expect(wrapper.length).toEqual(1);
  });
});