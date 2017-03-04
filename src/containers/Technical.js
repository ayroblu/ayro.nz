import React, { Component } from 'react'
import { connect } from 'react-redux'

import Switcher from '../components/Switcher'
import './Technical.css'

class Technical extends Component {
  render() {
    return (
      <div className='Technical'>
        Technical
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
)(Technical)

