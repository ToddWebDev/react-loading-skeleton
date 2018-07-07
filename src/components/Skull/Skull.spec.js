import React from 'react';
import { shallow, mount } from 'enzyme';
import Skull from './Skull';

describe('Skull', () => {

  test('Skull renders without exploding', () => {
    const wrapper = shallow(<Skull />);
    expect(wrapper.length).toEqual(1);
  });

  test('Skull renders default shape of round', () => {
    const wrapper = mount(<Skull />);
    expect(wrapper.props().shape).toEqual('round');
  });

  test('Skull renders custom shape', () => {
    const wrapper = mount(<Skull shape={'square'} />);
    expect(wrapper.props().shape).toEqual('square');
  });

});