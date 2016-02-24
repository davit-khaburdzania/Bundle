import request from 'axios'
import api from './../api'

export function getCollections () {
  return async (dispatch) => {
    try {
      let response = await request.get(api.collections)
      dispatch({ type: 'RECEIVE_COLLECTIONS', list: response.data })
    } catch (e) {
      // write error handler outside
      console.log(e.data.errors)
    }
  }
}
