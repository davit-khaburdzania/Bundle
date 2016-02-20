import { createStore, compose } from 'redux'
import rootReducer from '../reducers'

import thunk from './middlewares/thunk'
import history from './middlewares/history'
import devTools from './middlewares/devTools'
import devToolsPersistState from './middlewares/persistState'

const enhancers = compose(
  history(),
  thunk(),
  devTools(),
  devToolsPersistState()
)

export default function (initialState) {
  return createStore(rootReducer, initialState, enhancers)
}
