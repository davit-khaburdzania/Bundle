import { fromJS } from 'immutable'
import { Bundle, Collection } from '../records'
import { collectionSchema } from '../normalizers'
import { normalize } from 'normalizr'

import request from 'axios'
import api from './../api'

export function getCollection (id) {
  return async function (dispatch) {
    let response = await request.get(api.collections(id))
    let result = normalize(response.data, collectionSchema).entities
    let bundles = Object.values(result.bundles || []).map(item => new Bundle(fromJS(item)))
    let collections = Object.values(result.collections).map(item => new Collection(fromJS(item)))

    dispatch({ type: 'RECEIVE_BUNDLES', bundles })
    dispatch({ type: 'RECEIVE_COLLECTIONS', collections })
  }
}

export function getCollections () {
  return async function (dispatch) {
    let response = await request.get(api.collections())
    let collections = fromJS(response.data).map(item => new Collection(item))

    dispatch({ type: 'RECEIVE_COLLECTIONS', collections })
  }
}

export function generateNewCollection (id) {
  let collection = new Collection({
    id,
    name: 'Name Collection...',
    editMode: true,
    created_at: new Date().toISOString()
  })

  return { type: 'RECEIVE_COLLECTION', collection }
}

export function createCollection (id, name) {
  return async function (dispatch) {
    let response = await request.post(api.collections(), { name })
    let collection = new Collection(fromJS(response.data))

    dispatch({ type: 'RECEIVE_COLLECTION', collection })
    dispatch({ type: 'REMOVE_COLLECTION', id })
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
