import { fromJS } from 'immutable'
import request from 'axios'
import api from './../api'

export function getCollection (id) {
  return async function (dispatch) {
    let response = await request.get(api.collections(id))
    let collection = fromJS(response.data)

    dispatch({ type: 'RECEIVE_BUNDLES', list: collection.get('bundles') })

    collection = collection.update('bundles', bundles => bundles.map(bundle => bundle.get('id')))
    dispatch({ type: 'RECEIVE_COLLECTION', collection })
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

    dispatch({ type: 'ROUTE_RESET_COLLECTION_ID', id })
    dispatch({ type: 'REMOVE_FAVORITE', id, resourceType: 'Collection' })
    dispatch({ type: 'REMOVE_COLLECTION', id })
  }
}
