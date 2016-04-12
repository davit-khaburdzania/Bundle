import request from 'axios'
import api from './../api'

export function generateNewBundle () {
  return { type: 'GENERATE_NEW_BUNDLE' }
}

export function updateBundleState (data) {
  return { type: 'UPDATE_BUNDLE_LINKS', data }
}

export function getBundle (id) {
  return async function (dispatch) {
    const response = await request.get(api.bundles(id))
    dispatch({ type: 'RECEIVE_BUNDLE', bundle: response.data })
  }
}

export function getBundles () {
  return async function (dispatch) {
    const response = await request.get(api.bundles())
    dispatch({ type: 'RECEIVE_BUNDLES', list: response.data })
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
    dispatch({ type: 'UPDATE_BUNDLE', bundle: response.data })
  }
}

export function fetchLink (url) {
  return async function (dispatch) {
    const response = await request.get(api.fetchLink(url))
    const link = {
      url: response.data.url,
      title: response.data.title,
      description: response.data.description,
      image: response.data.image
    }

    dispatch({ type: 'FETCH_LINK', link })
  }
}

export function updateBundleLink (id, field, value) {
  return { type: 'UPDATE_BUNDLE_LINK', id, field, value }
}

export function updateBundleInfo (field, value) {
  return { type: 'UPDATE_BUNDLE_INFO', field, value }
}

export function toggleEditMode () {
  return { type: 'TOGGLE_EDIT_MODE' }
}
