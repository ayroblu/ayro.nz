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
        <Link to='/technical' className='technical'>
          <div className='bubble'>
            <div>
              <div className='bubbleInner'>
                Technical
              </div>
            </div>
          </div>
          <p>Technical</p>
        </Link>
        <Link to='/multiplatform' className='multiplatform'>
          <div className='bubble'>
            <div>
              <div className='bubbleInner'>
                Multi Platform
              </div>
            </div>
          </div>
          <p>Multi Platform</p>
        </Link>
      </nav>
    )
  }
}

export default Switcher

