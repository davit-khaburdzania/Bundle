import request from 'axios'
import api from './../api'

export function getBundles () {
  return async (dispatch) => {
    let response = await request.get(api.bundles())
    dispatch({ type: 'RECEIVE_BUNDLES', list: response.data })
  }
}

export function getBundle (id) {
  return async (dispatch) => {
    let response = await request.get(api.bundles(id))
    dispatch({ type: 'RECEIVE_BUNDLE', bundle: response.data })
  }
}

export function removeBundle (id) {
  return async (dispatch) => {
    let response = await request.delete(api.bundles(id))
    dispatch({ type: 'REMOVE_BUNDLE', id })
  }
}

export function editModeBundle (id, editMode) {
  return { type: 'EDIT_MODE_BUNDLE', id, editMode }
}

export function renameBundle (id, name) {
  return async (dispatch) => {
    let response = await request.put(api.bundles(id), { name })
    dispatch({ type: 'RENAME_BUNDLE', id, name })
    dispatch(editModeBundle(id, false))
  }
}

export function updateBundle (bundleId, data) {
  const payload = {
    bundle: data
  }

  return async (dispatch) => {
    try {
      let response = await request.put(api.bundles(bundleId), payload)
      dispatch({ type: 'UPDATE_BUNDLE', bundle: response.data })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}

export function updateBundleLink (id, field, value) {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_BUNDLE_LINK',
      id,
      field,
      value
    })
  }
}

export function updateBundleState(field, value) {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_BUNDLE_INFO',
      field,
      value
    })
  }
}

export function fetchLink (url) {
  return async (dispatch) => {
    try {
      const response = await request.get(api.fetchLink(url))
      const link = {
        url: response.data.url,
        title: response.data.title,
        description: response.data.description,
        image: response.data.image
      }

      dispatch({ type: 'FETCH_LINK', link })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}

export function toggleEditMode () {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_EDIT_MODE' })
  }
}
