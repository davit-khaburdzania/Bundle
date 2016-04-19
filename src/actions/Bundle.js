import { fromJS, Map, List } from 'immutable'
import request from 'axios'
import api from './../api'

export function saveBundleAction (bundle) {
  return async function (dispatch) {
    const response = await request.post(api.bundles(), { bundle })
    const { data } = response

    dispatch({ type: 'SAVE_BUNDLE', bundle: fromJS(data) })

    return data
  }
}

export function generateNewBundle () {
  return { type: 'GENERATE_NEW_BUNDLE' }
}

export function addCurrentLinkToLink (bundleId, link) {
  return { type: 'ADD_CURRENT_LINK_TO_BUNDLE', link, bundleId }
}

export function getBundle (id) {
  return async function (dispatch) {
    const response = await request.get(api.bundles(id))
    dispatch({ type: 'SAVE_BUNDLE', bundle: fromJS(response.data) })
  }
}

export function getBundles () {
  return async function (dispatch) {
    const response = await request.get(api.bundles())
    dispatch({ type: 'RECEIVE_BUNDLES', list: fromJS(response.data) })
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
    const response = await request.put(api.bundles(id), { bundle: data })
    dispatch({ type: 'SAVE_BUNDLE', bundle: fromJS(response.data) })
  }
}

export function fetchLink (url, bundleId) {
  return async function (dispatch) {
    const response = await request.get(api.fetchLink(url))
    const link = fromJS({
      url: response.data.url,
      title: response.data.title,
      description: response.data.description,
      image: response.data.image
    })

    dispatch({ type: 'FETCH_LINK', link, bundleId})
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
