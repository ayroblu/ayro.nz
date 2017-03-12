import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../actions/user'
import './MainPage.css'
import Logo from '../components/Logo'

class MainPage extends Component {
  render() {
    return (
      <article className='MainPage'>
        <Logo style={{height: '200px'}} />
        <h1>Ayro</h1>
        <p>Freelancer, enthusiast</p>
      </article>
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

