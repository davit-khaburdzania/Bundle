import request from 'axios'
import api from './../api'

export function fetchLink (url, bundleId) {
  return async (dispatch) => {
    try {
      let response = await request.get(api.fetchLink(url))
      dispatch({ type: 'FETCH_LINK', link: response.data, bundleId })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}
