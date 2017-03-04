import React, { Component } from 'react'
import { connect } from 'react-redux'

import Switcher from '../components/Switcher'
import './Interactive.css'

class Interactive extends Component {
  render() {
    return (
      <div className='Interactive'>
        Interactive
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
)(Interactive)

