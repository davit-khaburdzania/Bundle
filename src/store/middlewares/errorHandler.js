import { applyMiddleware } from 'redux'
import { addAlert } from './../../actions/Alert'

function errorHandler () {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return next(async function (dispatch, getState) {
        try {
          return await action(dispatch, getState)
        } catch (error) {
          if (error && error.data || error.statusText) {
            return dispatch(addAlert('error', error.data.errors || error.statusText))
          } else {
            throw error
          }
        }
      })
    } else {
      return next(action)
    }
  }
}

export default () => applyMiddleware(errorHandler)
