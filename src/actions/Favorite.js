import { fromJS } from 'immutable'
import request from 'axios'
import api from './../api'

export function getFavoritesList () {
  return async function (dispatch) {
    const { data } = await request.get(api.favorites())

    dispatch({ type: 'RECEIVE_FAVORITES_LIST', list: fromJS(data) })
  }
}

export function favorite (resource, id) {
  return async function (dispatch) {
    await request.post(api.favorite(resource, id))

    const type = resource === 'bundle' ? 'FAVORITE_BUNDLE' : 'FAVORITE_COLLECTION'
    dispatch({ type, id })
  }
}

export function unfavorite (resource, id) {
  return async function (dispatch) {
    await request.delete(api.favorite(resource, id))

    const type = resource === 'bundle' ? 'UNFAVORITE_BUNDLE' : 'UNFAVORITE_COLLECTION'
    dispatch({ type, id })
  }
}
