import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../actions/user'
import './MainPage.css'
import Logo from '../components/Logo'
import Switcher from '../components/Switcher'

class MainPage extends Component {
  render() {
    return (
      <div className='MainPage'>
        <Logo style={{height: '200px'}} />
        <h1>Ayro</h1>
        <p>Technical Services</p>
        <Switcher />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)

