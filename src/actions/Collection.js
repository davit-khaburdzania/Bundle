import request from 'axios'
import api from './../api'

export function getCollection (id) {
  return async (dispatch) => {
    try {
      let response = await request.get(api.collections(id))
      dispatch({ type: 'RECEIVE_COLLECTION', collection: response.data })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}

export function getCollections () {
  return async (dispatch) => {
    try {
      let response = await request.get(api.collections())
      dispatch({ type: 'RECEIVE_COLLECTIONS', list: response.data })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}