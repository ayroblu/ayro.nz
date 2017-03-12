import React, { Component } from 'react'
import { Link } from 'react-router'
import './Switcher.css'
import Logo from './Logo'

class Switcher extends Component {
  static propTypes = {
    routing: React.PropTypes.object.isRequired
  , route: React.PropTypes.string
  , alignSide: React.PropTypes.bool
  }
  componentWillMount(){
    this._bubbles = []
    this._styles = []
    this._originalStyles = []
    this._transmissionStarted = false
    this._resizer = window.addEventListener('resize', this._resize)
  }
  _resize = ()=>{
    window.requestAnimationFrame(()=>{
      this.forceUpdate()
    })
  }
  componentWillUnmount(){
    this._resizer = window.removeEventListener('resize', this._resize)
  }
  componentWillReceiveProps(props){
    this._setStyles(props.alignSide)
  }
  _setStyles(alignSide){
    // width of window
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    // width of item (note how bubbles are forced 100)
    const itemWidth = 100
    if (alignSide) {
      this._styles = Array(3).fill().map((v,i)=>({
        left: '30px'
      , top: `${i*150+30}px`
      }))
    } else {
      this._styles = Array(3).fill().map((v,i)=>({
        left: `${windowWidth/2-itemWidth*(1.5-i)+40*(i-1)}px`
      , top: `${windowHeight-160}px`
      }))
    }
  }
  render() {
    this._setStyles(this.props.alignSide)
    return (
      <nav className='Switcher'>
        <Link to='/' className='link home' ref={r=>this._bubbles[0]=r} style={this._styles[0]}>
          <div className='bubble'>
            <Logo style={{padding: '15%', height: '70%', width: '70%'}} animationDisabled={true}/>
          </div>
          <p>Home</p>
        </Link>
        <Link to='/technical' className='link technical' ref={r=>this._bubbles[1]=r} style={this._styles[1]}>
          <div className='bubble'>
            <div>
              <div className='bubbleInner'>
                Technical
              </div>
            </div>
          </div>
          <p>Technical</p>
        </Link>
        <Link to='/multiplatform' className='link multiPlatform' ref={r=>this._bubbles[2]=r} style={this._styles[2]}>
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

