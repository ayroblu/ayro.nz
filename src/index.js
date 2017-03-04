import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import configureStore from './store'
import DevTools from './containers/DevTools'
import './index.css'

import Routes from './routes'

const isProduction = process.env.NODE_ENV === 'production'

// Let the reducers handle initial state
const initialState = {}
const store = configureStore(initialState)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Routes history={history} />
      {!isProduction && <DevTools />}
    </div>
  </Provider>
, document.getElementById('root')
)


