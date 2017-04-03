import React, { Component } from 'react'
import { connect } from 'react-redux'

import './MultiPlatform.css'

class MultiPlatform extends Component {
  render() {
    return (
      <article className='MultiPlatform'>
        <h2>MultiPlatform</h2>
        <section>
          <div className="sectionText">
            <h3>Android</h3>
            <p>Building for the biggest, most versatile, open source mobile operating system</p>
          </div>
          <img src="/android-pixel.png" alt="android pixel" className="androidPixel"/>
        </section>
        <section>
          <img src="/iphone-7.png" alt="iphone7" className="androidPixel"/>
          <div className="sectionText">
            <h3>iOS</h3>
            <p>Building for the most tight nit, design oriented, curated mobile operating system</p>
          </div>
        </section>
        <section>
          <div className="sectionText">
            <h3>Desktop</h3>
            <p>Building functional sites for real usage</p>
          </div>
          <img src="/imac.png" alt="imac" className="androidPixel"/>
        </section>
        <section>
          <img src="/all.png" alt="all" className="androidPixel"/>
          <div className="sectionText">
            <h3>All at once</h3>
            <p>Building for one doesn't lock you out of building for another</p>
            <p>Using react native and responsive web design</p>
          </div>
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

