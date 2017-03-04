import React, { Component } from 'react'
import { connect } from 'react-redux'

import Switcher from '../components/Switcher'
import './MultiPlatform.css'

class MultiPlatform extends Component {
  render() {
    return (
      <div className='MultiPlatform'>
        MultiPlatform
        <p>First I need: android, ios, desktop</p>
        <Switcher />
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiPlatform)

