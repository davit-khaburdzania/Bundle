import { fromJS } from 'immutable'
import request from 'axios'
import api from './../api'

export function getFavorites () {
  return async function (dispatch) {
    let response = await request.get(api.favorites())
    let list = fromJS(response.data)

    let collections = list
      .filter(item => item.get('favoritable_type') == 'Collection')
      .map(item => item.get('favoritable'))

    let bundles = list
      .filter(item => item.get('favoritable_type') == 'Bundle')
      .map(item => item.get('favoritable'))

    dispatch({ type: 'RECEIVE_COLLECTIONS', list: collections })
    dispatch({ type: 'RECEIVE_BUNDLES', list: bundles })

    list = list.map(item => fromJS({
      id: item.getIn(['favoritable', 'id']),
      type: item.get('favoritable_type'),
      created_at: item.get('created_at')
    }))

    dispatch({ type: 'RECEIVE_FAVORITES', list })
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
