import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import DevTools from './components/DevTools'
//import createLogger from 'redux-logger'
//import createSagaMiddleware from 'redux-saga'

//const logger = createLogger()
//const sagaMiddleware = createSagaMiddleware()
const isProduction = process.env.NODE_ENV === 'production'

export default function configureStore(initialState = {}) {
  // Create the store with two middlewares
  const middlewares = [
  //  sagaMiddleware
  //, logger
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  , !isProduction ? DevTools.instrument() : null
  ].filter(e=>e)

  const store = createStore(
    reducers
  , initialState
  , compose(...enhancers)
  )

  // Extensions
  //store.runSaga = sagaMiddleware.run
  store.asyncReducers = {} // Async reducer registry

  return store
}
