import React, { Component } from 'react'
import { Link } from 'react-router'
import './Switcher.css'
import Logo from './Logo'

class Switcher extends Component {
  render() {
    return (
      <nav className='Switcher'>
        <Link to='/' className='home'>
          <div className='bubble'>
            <Logo style={{padding: '15%', height: '70%', width: '70%'}} animationDisabled={true}/>
          </div>
          <p>Home</p>
        </Link>
        <Link to='/interactive' className='interactive'>
          <div className='bubble' />
          <p>Interactive</p>
        </Link>
        <Link to='/multiplatform' className='multiplatform'>
          <div className='bubble' />
          <p>Multi Platform</p>
        </Link>
      </nav>
    )
  }
}

export default Switcher

