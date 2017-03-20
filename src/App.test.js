import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'
const it = global.it
const expect = global.expect

it('renders without crashing', () => {
  const wrapper = shallow(<App greeting={'waffles'} />)
  expect(wrapper.find('div').text()).toBe('waffles')
})

// Let's just log these out so that StandardJS is happy
console.log(React)
console.log(ReactDOM)
