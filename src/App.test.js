import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<App greeting='waffles' />)
  expect(wrapper.render().find('article').text()).toBe('waffles')
})
