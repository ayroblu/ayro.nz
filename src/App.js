import React, { Component } from 'react'
import _ from 'lodash'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

export default class BusView extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <div>
        Empty
        </div>
      </MuiThemeProvider>
    )
  }
}
