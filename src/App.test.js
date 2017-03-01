import App, {AppHijacked} from './App';
import { mount, shallow } from 'enzyme';

import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const wrapper = shallow(<App greeting={'waffles'} />)
  expect(wrapper.find('div').text()).toBe('waffles')
});

it('gets a property magically injected by an higher order component', () => {
  const wrapper = mount(<AppHijacked greeting={'waffles'} />)
  expect(wrapper.find('a').text()).toBe('THIS ALWAYS GETS RENDERED IN AN HOC')
});