import React, { Component } from 'react'
import { Link } from 'react-router'
import './Switcher.css'
import Logo from './Logo'

const routes = ['/', '/technical', '/multiplatform']
const cn = arr=>arr.filter(a=>a).join(' ')

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
  _getStyles(alignSide){
    // width of window
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    // width of item (note how bubbles are forced 100)
    const itemWidth = 100
    if (alignSide) {
      return Array(3).fill().map((v,i)=>({
        left: '30px'
      , top: `${i*150+30}px`
      }))
    } else {
      return Array(3).fill().map((v,i)=>({
        left: `${windowWidth/2-itemWidth*(1.5-i)+40*(i-1)}px`
      , top: `${windowHeight-160}px`
      }))
    }
  }
  render() {
    const { alignSide, route } = this.props
    const styles = this._getStyles(alignSide)
    const index = routes.indexOf(route)
    return (
      <nav className='Switcher'>
        <Link to='/' className='link home' ref={r=>this._bubbles[0]=r} style={styles[0]}>
          <div className={cn(['bubble', index===0 ? 'active' : null])}>
            <Logo style={{padding: '15%', height: '70%', width: '70%'}} animationDisabled={true}/>
          </div>
          <p>Home</p>
        </Link>
        <Link to='/technical' className='link technical' ref={r=>this._bubbles[1]=r} style={styles[1]}>
          <div className={cn(['bubble', index===1 ? 'active' : null])}>
            <div>
              <div className='bubbleInner'>
                Technical
              </div>
            </div>
          </div>
          <p>Technical</p>
        </Link>
        <Link to='/multiplatform' className='link multiPlatform' ref={r=>this._bubbles[2]=r} style={styles[2]}>
          <div className={cn(['bubble', index===2 ? 'active' : null])}>
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

