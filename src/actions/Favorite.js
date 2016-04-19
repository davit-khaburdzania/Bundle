import request from 'axios'
import api from './../api'

export function getFavorites () {
  return async function (dispatch) {
    let bundles = []
    let collections = []
    const response = await request.get(api.favorites())

    response.data.filter(object => {
      if (object.favoritable_type === 'Collection') {
        return collections.push(object.favoritable)
      }

      return bundles.push(object.favoritable)
    })

    dispatch({ type: 'RECEIVE_FAVORITES_LIST', bundles, collections })
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
