import { fromJS, Map, List } from 'immutable'
import { Bundle, User, Link } from '../records'
import { bundleSchema } from '../normalizers'
import { normalize } from 'normalizr'

import request from 'axios'
import api from './../api'

function reduceBundle (data, dispatch) {
  let result = fromJS(normalize(data, bundleSchema).entities)
    .update('links', links => links || Map())

  let bundle = new Bundle(result.get('bundles').first())
  let users = result.get('users').valueSeq().map(item => new User(item))
  let links = result.get('links').valueSeq().map(item => new Link(item))

  dispatch({ type: 'RECEIVE_USERS', users })
  dispatch({ type: 'RECEIVE_LINKS', links })
  dispatch({ type: 'SAVE_BUNDLE', bundle })
}

export function generateNewBundle () {
  return { type: 'GENERATE_NEW_BUNDLE' }
}

export function createBundle (payload) {
  return async function (dispatch) {
    let { data } = await request.post(api.bundles(), { bundle: payload })

    reduceBundle(data, dispatch)
    return data
  }
}

export function getBundle (id) {
  return async function (dispatch) {
    let response = await request.get(api.bundles(id))

    reduceBundle(response.data, dispatch)
  }
}

export function getBundles () {
  return async function (dispatch) {
    let response = await request.get(api.bundles())
    let bundles = fromJS(response.data).map(item => new Bundle(item))

    dispatch({ type: 'RECEIVE_BUNDLES', bundles })
  }
}

export function removeBundle (id) {
  return async function (dispatch) {
    await request.delete(api.bundles(id))

    dispatch({ type: 'ROUTE_RESET_BUNDLE_ID', id })
    dispatch({ type: 'REMOVE_FAVORITE', id, resourceType: 'Bundle' })
    dispatch({ type: 'REMOVE_BUNDLE', id })
  }
}

export function updateBundle (id, payload) {
  return async function (dispatch) {
    let response = await request.put(api.bundles(id), { bundle: payload })

    reduceBundle(response.data, dispatch)
  }
}

export function addCurrentLinkToBundle (bundleId, link) {
  return function (dispatch) {
    dispatch({ type: 'ADD_LINK_ID_TO_BUNDLE', linkId: link.get('id'), bundleId })
    dispatch({ type: 'RECEIVE_LINK', link })
    dispatch({ type: 'CLEAR_CURRENT_LINK', bundleId })
  }
}

export function removeLinkFromBundle (bundleId, index) {
  return { type: 'REMOVE_LINK_ID_FROM_BUNDLE', bundleId, index }
}


export function updateBundleInfo (bundleId, field, value) {
  return { type: 'UPDATE_BUNDLE_INFO', bundleId, field, value }
}

export function toggleEditMode (bundleId) {
  return { type: 'TOGGLE_EDIT_MODE', bundleId }
}
