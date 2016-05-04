import { createStore, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from '../reducers'

import errorHandler from './middlewares/errorHandler'
import thunk from './middlewares/thunk'

const enhancers = compose(
  errorHandler(),
  thunk(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export const store = createStore(rootReducer, {}, enhancers)
export const history = syncHistoryWithStore(browserHistory, store)
