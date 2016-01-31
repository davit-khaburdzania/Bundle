import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistState } from 'redux-devtools'

import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
)

export default function (initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
