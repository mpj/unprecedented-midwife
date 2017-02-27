// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('greets waffles', () => {
  const wrapper = shallow(<App greeting={'waffles'} loading={false} />)
  expect(wrapper.find('div').text()).toBe('waffles')
});

it('renders loading when loading', () => {
  const wrapper = shallow(<App greeting={'waffles'} loading={true} />)
  expect(wrapper.find('div').text()).toBe('Loading')
});
