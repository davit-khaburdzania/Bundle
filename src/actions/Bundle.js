import request from 'axios'
import api from './../api'

export function getBundles () {
  return async (dispatch) => {
    try {
      let response = await request.get(api.bundles)
      dispatch({ type: 'RECEIVE_BUNDLES', list: response.data })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}
