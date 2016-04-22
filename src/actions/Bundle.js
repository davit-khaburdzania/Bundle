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

export function createBundle (bundle) {
  return async function (dispatch) {
    let response = await request.post(api.bundles(), { bundle })
    let bundle = fromJS(response.data)

    reduceBundle(bundle, dispatch)
    return bundle
  }
}

export function generateNewBundle () {
  return { type: 'GENERATE_NEW_BUNDLE' }
}

export function addCurrentLinkToBundle (bundleId, link) {
  dispatch({ type: 'ADD_LINK_ID_TO_BUNDLE', linkId: link.get('id'), bundleId })
  dispatch({ type: 'ADD_CURRENT_LINK_TO_BUNDLE', link, bundleId })
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

export function updateBundle (id, data) {
  return async function (dispatch) {
    let response = await request.put(api.bundles(id), { bundle: data })
    let bundle = fromJS(response.data)

    reduceBundle(bundle, dispatch)
  }
}

export function fetchLink (url, bundleId) {
  return async function (dispatch) {
    let response = await request.get(api.fetchLink(url))
    let link = fromJS({
      url: response.data.url,
      title: response.data.title,
      description: response.data.description,
      image: response.data.image
    })

    dispatch({ type: 'SET_CURRENT_LINK', link, bundleId})
  }
}

export function updateBundleLink (bundleId, linkId, field, value) {
  return { type: 'UPDATE_BUNDLE_LINK', bundleId, linkId, field, value }
}

export function updateBundleInfo (bundleId, field, value) {
  return { type: 'UPDATE_BUNDLE_INFO', bundleId, field, value }
}

export function toggleEditMode (bundleId) {
  return { type: 'TOGGLE_EDIT_MODE', bundleId }
}
