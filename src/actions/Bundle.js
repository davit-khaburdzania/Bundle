import request from 'axios'
import api from './../api'

export function getBundles () {
  return async (dispatch) => {
    try {
      let response = await request.get(api.bundles())
      dispatch({ type: 'RECEIVE_BUNDLES', list: response.data })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}

export function getBundle (id) {
  return async (dispatch) => {
    try {
      let response = await request.get(api.bundles(id))
      dispatch({ type: 'RECEIVE_BUNDLE', bundle: response.data })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}
