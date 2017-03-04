import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import MainPage from './containers/MainPage'
import Interactive from './containers/Interactive'
import MultiPlatform from './containers/MultiPlatform'
import NoMatch from './components/NoMatch'

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainPage}/>
        <Route path="interactive" component={Interactive}/>
        <Route path="multiplatform" component={MultiPlatform}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  )
}

export default Routes


