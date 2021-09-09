import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App test', () => {
  it('renders the component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })

  it('loads the SVG image without character issues', () => {
    const wrapper = shallow(<App />)
    const image = wrapper.find('img')
  })

  it('matches anchor text', () => {
    const wrapper = shallow(<App />)
  })
})
