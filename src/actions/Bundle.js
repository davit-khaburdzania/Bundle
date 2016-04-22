import { fromJS, Map, List } from 'immutable'
import request from 'axios'
import api from './../api'

function reduceBundle(bundle, dispatch) {
  let links = bundle.get('links')
  let normalizedBundle = bundle.update('links', links => {
    return links.map(link => link.get('id'))
  })

  dispatch({ type: 'RECEIVE_LINKS', list: links })
  dispatch({ type: 'SAVE_BUNDLE', bundle: normalizedBundle })
}

export function createBundle (payload) {
  return async function (dispatch) {
    let response = await request.post(api.bundles(), { bundle: payload })
    let bundle = fromJS(response.data)
    console.log(bundle.get('id'))
    reduceBundle(bundle, dispatch)
    return bundle
  }
}

export function generateNewBundle () {
  return { type: 'GENERATE_NEW_BUNDLE' }
}

export function getBundle (id) {
  return async function (dispatch) {
    let response = await request.get(api.bundles(id))
    let bundle = fromJS(response.data)

    reduceBundle(bundle, dispatch)
  }
}

export function getBundles () {
  return async function (dispatch) {
    let response = await request.get(api.bundles())
    let list = fromJS(response.data)

    dispatch({ type: 'RECEIVE_BUNDLES', list })
  }
}

export function removeBundle (id) {
  return async function (dispatch) {
    await request.delete(api.bundles(id))
    dispatch({ type: 'REMOVE_BUNDLE', id })
  }
}

export function updateBundle (id, payload) {
  return async function (dispatch) {
    let response = await request.put(api.bundles(id), { bundle: payload })
    let bundle = fromJS(response.data)

    reduceBundle(bundle, dispatch)
  }
}

export function addCurrentLinkToBundle (bundleId, link) {
  return function (dispatch) {
    dispatch({ type: 'ADD_LINK_ID_TO_BUNDLE', linkId: link.get('id'), bundleId })
    dispatch({ type: 'ADD_CURRENT_LINK_TO_BUNDLE', link, bundleId })
    dispatch({ type: 'CLEAR_CURRENT_LINK',bundleId })
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
