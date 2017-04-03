import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import './App.css'
import Switcher from '../components/Switcher'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//import injectTapEventPlugin from 'react-tap-event-plugin'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin()

class App extends Component {
  render(){
    //  <MuiThemeProvider>
    //  </MuiThemeProvider>
        //{this.props.children}
    return (
      <main className='App'>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={300}
        >
          {React.cloneElement(this.props.children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
        {false &&
        <Switcher
          alignSide={false}
          routing={this.props.routing}
          route={window.location.pathname}
        />}
      </main>
    )
  }
}

const mapStateToProps = state => ({
  routing: state.routing
})

export default connect(
  mapStateToProps
)(App)

