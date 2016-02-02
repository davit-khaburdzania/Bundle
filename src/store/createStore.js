import { createStore, compose } from 'redux'
import rootReducer from '../reducers'

import * as middlewares from './middlewares'

const enhancers = compose(
  middlewares.thunk(),
  middlewares.history(),
  middlewares.devTools(),
  middlewares.devToolsPersistState()
)

export default function (initialState) {
  return createStore(rootReducer, initialState, enhancers)
}
