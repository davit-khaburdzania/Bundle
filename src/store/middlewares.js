import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import DevTools from '../containers/DevTools'
import { persistState } from 'redux-devtools'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncHistory } from 'react-router-redux'

const history = createBrowserHistory()
const historyMiddleware = syncHistory(history)

export default compose(
  applyMiddleware(historyMiddleware),
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
)

export { history }
