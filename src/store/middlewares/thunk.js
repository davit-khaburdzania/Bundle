import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

export default function thunk () {
  return applyMiddleware(thunkMiddleware)
}
