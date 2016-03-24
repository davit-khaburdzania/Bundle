import { applyMiddleware } from 'redux'
import { addAlert } from './../../actions/Alert'

function errorHandler () {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return next(async function (dispatch, getState) {
        try {
          return await action(dispatch, getState)
        } catch (response) {
          if (response instanceof Error) {
            return dispatch(addAlert('error', response.message))
          } else {
            return dispatch(
              addAlert('error', response.data.errors || response.statusText)
            )
          }
        }
      })
    } else {
      return next(action)
    }
  }
}

export default () => applyMiddleware(errorHandler)
