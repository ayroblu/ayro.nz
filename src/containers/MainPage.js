import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import * as userActions from '../actions/user'
import './MainPage.css'
import Logo from '../components/Logo'

class MainPage extends Component {
  render() {
    return (
      <article className='MainPage'>
        <Link to="/portfolio">
          <Logo style={{height: '200px'}} />
        </Link>
        <h1>Ayro</h1>
        <p>Websites and everything else that's tech</p>
        <p>For enquiries please contact: <a href="mailto:blu@ayro.nz">blu@ayro.nz</a></p>
        {this.props.children}
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

