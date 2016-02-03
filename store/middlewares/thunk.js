import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

export function thunk () {
  return applyMiddleware(thunkMiddleware)
}
