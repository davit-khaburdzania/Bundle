import { createStore, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from '../reducers'

import errorHandler from './middlewares/errorHandler'
import thunk from './middlewares/thunk'
import devTools from './middlewares/devTools'
import devToolsPersistState from './middlewares/persistState'

const enhancers = compose(
  errorHandler(),
  thunk(),
  devTools(),
  devToolsPersistState()
)

export const store = createStore(rootReducer, {}, enhancers)
export const history = syncHistoryWithStore(browserHistory, store)
