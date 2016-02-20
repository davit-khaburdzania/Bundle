import { applyMiddleware } from 'redux'
import { syncHistory } from 'react-router-redux'
import browserHistory from '../../history'

const historyMiddleware = syncHistory(browserHistory)

export default function history () {
  return applyMiddleware(historyMiddleware)
}
