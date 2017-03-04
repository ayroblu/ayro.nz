import React from 'react'
import ReactDOM from 'react-dom'
import Technical from './Technical'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Technical />, div)
})

