import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import MainPage from './containers/MainPage'
import Technical from './containers/Technical'
import MultiPlatform from './containers/MultiPlatform'
import NoMatch from './components/NoMatch'

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainPage}/>
        <Route path="technical" component={Technical}/>
        <Route path="multiplatform" component={MultiPlatform}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  )
}

export default Routes


