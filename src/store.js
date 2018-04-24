import { createStore, applyMiddleware, compose } from 'redux';

import { createLogger } from 'redux-logger'
import rootReducer from './reducers/index';

const middlewares = []
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

  middlewares.push(
    createLogger({collapsed: true})
  )
}

const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares),
)(createStore)

const store = createStoreWithMiddleware(rootReducer);

export default store
