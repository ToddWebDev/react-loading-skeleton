import React from 'react';
import { shallow, mount } from 'enzyme';
import Skeleton from './Skeleton';

describe('Skeleton', () => {

  test('Skeleton renders without exploding', () => {
    const wrapper = shallow(<Skeleton />);
    expect(wrapper.length).toEqual(1);
  });

  test('Skeleton renders default props correctly', () => {
    const wrapper = mount(<Skeleton />);
    expect(wrapper.props().skull).toBeFalsy();
    expect(wrapper.props().animate).toBeTruthy();
    expect(wrapper.props().amount).toEqual(1);
    expect(wrapper.props().direction).toEqual('column');
  });

  test('Skeleton renders with skull and bones', () => {
    const wrapper = mount(<Skeleton skull={true} amount={3} />);
    expect(wrapper.props().skull).toBeTruthy();
    expect(wrapper.props().animate).toBeTruthy();
    expect(wrapper.props().amount).toEqual(3);
    expect(wrapper.props().direction).toEqual('column');
  });

  test('Skeleton renders with skull and bones in direction row', () => {
    const wrapper = mount(<Skeleton skull={true} amount={3} direction={'row'} />);
    expect(wrapper.props().skull).toBeTruthy();
    expect(wrapper.props().animate).toBeTruthy();
    expect(wrapper.props().amount).toEqual(3);
    expect(wrapper.props().direction).toEqual('row');
  });

  test('Skeleton renders with no animation', () => {
    const wrapper = mount(<Skeleton animate={false} />);
    expect(wrapper.props().skull).toBeFalsy();
    expect(wrapper.props().animate).toBeFalsy();
    expect(wrapper.props().amount).toEqual(1);
    expect(wrapper.props().direction).toEqual('column');
  });

});