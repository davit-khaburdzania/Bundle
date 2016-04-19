import request from 'axios'
import api from './../api'

export function getFavorites () {
  return async function (dispatch) {
    const response = await request.get(api.favorites())
    console.log('act : ', response)
    // dispatch({ type: 'RECEIVE_FAVORITES', result: fromJS(response.data) })
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
