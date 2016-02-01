import { createStore } from 'redux'
import rootReducer from '../reducers'

import middlewares from './middlewares'

export default function (initialState) {
  return createStore(rootReducer, initialState, middlewares)
}
