import { fromJS } from 'immutable'
import { Bundle, Collection } from '../records'
import request from 'axios'
import api from './../api'

export function getCollection (id) {
  return async function (dispatch) {
    let response = await request.get(api.collections(id))
    let collection = new Collection(fromJS(response.data))
    let bundles = collection.bundles.map(item => new Bundle(item))

    collection = collection.update('bundles', bundles => bundles.map(bundle => bundle.get('id')))

    dispatch({ type: 'RECEIVE_BUNDLES', list: bundles })
    dispatch({ type: 'RECEIVE_COLLECTION', collection })
  }
}

export function getCollections () {
  return async function (dispatch) {
    let response = await request.get(api.collections())
    let collections = fromJS(response.data).map(item => new Collection(item))

    dispatch({ type: 'RECEIVE_COLLECTIONS', list: collections })
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
