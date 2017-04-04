import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import * as userActions from '../actions/user'
import './Portfolio.css'
import Logo from '../components/Logo'

class Portfolio extends Component {
  render() {
    return (
      <article className='Portfolio'>
        <Link to="/">
          <Logo style={{height: '100px'}} animationDisabled={true}/>
        </Link>
        <h1>Isolated examples</h1>
        <section>
          <a href="https://webrec.ayro.nz">
            <img src="/webrec.png" alt='Video Delay Site' className="screenshot" />
          </a>
          <div className='right'>
            <h2>Video Delay Site</h2>
            <p>This site is work purely done by us for an Archery Club for charity</p>
            <p>This is using the latest web standards, meaning it pretty much only runs on chrome</p>
            <p>This is a video delay site to playback video at a set delay, we also have an app which is made by bundling with electron</p>
          </div>
        </section>
        <section>
          <a href="https://aklbuses.nz">
            <img src="/aklbuses.png" alt='Live Auckland Buses' className="screenshot" />
          </a>
          <div className='left'>
            <h2>Live Auckland Buses</h2>
            <p>This site is work purely done by us for the people of Auckland</p>
            <p>This shows the live locations of all the buses in Auckland accurate to the last 30 seconds (based on Auckland Transport)</p>
          </div>
        </section>
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
)(Portfolio)


