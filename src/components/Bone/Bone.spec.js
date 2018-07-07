import React from 'react';
import { shallow, mount } from 'enzyme';
import Bone from './Bone';

describe('Bone', () => {

  test('Bone renders without exploding', () => {
    const wrapper = shallow(<Bone />);
    expect(wrapper.length).toEqual(1);
  });

  test('Bone renders default width of 100 and height of 10', () => {
    const wrapper = mount(<Bone />);
    expect(wrapper.props().width).toEqual(100);
    expect(wrapper.props().height).toEqual(10);
  });

  test('Bone renders custom width', () => {
    const wrapper = mount(<Bone width={50} />);
    expect(wrapper.props().width).toEqual(50);
  });

  test('Bone renders custom height', () => {
    const wrapper = mount(<Bone height={20} />);
    expect(wrapper.props().height).toEqual(20);
  });

});