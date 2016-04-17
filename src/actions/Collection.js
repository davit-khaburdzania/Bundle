import { fromJS } from 'immutable'
import request from 'axios'
import api from './../api'

export function getCollection (id) {
  return async function (dispatch) {
    const response = await request.get(api.collections(id))
    dispatch({ type: 'RECEIVE_COLLECTION', collection: fromJS(response.data) })
  }
}

export function getCollections () {
  return async function (dispatch) {
    const response = await request.get(api.collections())
    dispatch({ type: 'RECEIVE_COLLECTIONS', list: fromJS(response.data) })
  }
}

export function removeCollection (id) {
  return async function (dispatch) {
    await request.delete(api.collections(id))
    dispatch({ type: 'REMOVE_COLLECTION', id })
  }
}
