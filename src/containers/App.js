import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import './App.css'
import Switcher from '../components/Switcher'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//import injectTapEventPlugin from 'react-tap-event-plugin'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin()

class App extends Component {
  render(){
    //  <MuiThemeProvider>
    //  </MuiThemeProvider>
    //  <ReactCSSTransitionGroup
    //    component="div"
    //    transitionName="example"
    //    transitionEnterTimeout={0}
    //    transitionLeaveTimeout={2000}
    //  >
    //    {React.cloneElement(this.props.children, {
    //      key: location.pathname
    //    })}
    //  </ReactCSSTransitionGroup>
    return (
      <main className='App'>
        {this.props.children}
        <Switcher alignSide={location.pathname!=='/'} routing={this.props.routing}/>
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

