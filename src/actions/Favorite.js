import { fromJS } from 'immutable'
import request from 'axios'
import api from './../api'

export function getFavorites () {
  return async function (dispatch) {
    let response = await request.get(api.favorites())
    let list = fromJS(response.data)

    let favorites = list.map(item => fromJS({
      id: item.getIn(['favoritable', 'id']),
      type: item.get('favoritable_type'),
      created_at: item.get('created_at')
    }))

    let groupedFavs = list
      .groupBy(item => item.get('favoritable_type'))
      .mapEntries(([k, v]) => [k, v.map(item => item.get('favoritable'))])

    dispatch({ type: 'RECEIVE_COLLECTIONS', list: groupedFavs.get('Collection', []) })
    dispatch({ type: 'RECEIVE_BUNDLES', list: groupedFavs.get('Bundle', []) })
    dispatch({ type: 'RECEIVE_FAVORITES', list: favorites })
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

    let type = resource === 'bundle' ? 'UNFAVORITE_BUNDLE' : 'UNFAVORITE_COLLECTION'
    let resourceType = resource === 'bundle' ? 'Bundle' : 'Collection'

    dispatch({ type, id })
    dispatch({ type: 'UNFAVORITE', id, resourceType })
  }
}
