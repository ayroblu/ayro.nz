import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Technical.css'

class Technical extends Component {
  render() {
    return (
      <article className='Technical'>
        <h2>Technical</h2>
        <section>
          <h3>Website development</h3>
          <p>Building beautiful, with the latest features</p>
          <p>React, and other frameworks</p>
        </section>
        <section>
          <h3>DevOps</h3>
          <p>Docker, linux and handling servers and containers</p>
        </section>
        <section>
          <h3>Tensorflow and Machine Learning</h3>
          <p>Getting your data to work for you</p>
        </section>
        <section>
          <h3>Mathematics</h3>
          <p>Just something I'm interested in, comes in handy for functional apps</p>
        </section>
      </article>
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

