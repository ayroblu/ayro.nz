import React, { Component } from 'react'
import { connect } from 'react-redux'

import './MultiPlatform.css'

class MultiPlatform extends Component {
  render() {
    return (
      <article className='MultiPlatform'>
        <h2>MultiPlatform</h2>
        <section>
          <h3>Android</h3>
          <p>Building for the biggest, most versatile, open source mobile operating system</p>
        </section>
        <section>
          <h3>iOS</h3>
          <p>Building for the most tight nit, design oriented, curated mobile operating system</p>
        </section>
        <section>
          <h3>Desktop</h3>
          <p>Building functional sites for real usage</p>
        </section>
        <section>
          <h3>All at once</h3>
          <p>Building for one doesn't lock you out of building for another</p>
          <p>Using react native and responsive web design</p>
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
)(MultiPlatform)

