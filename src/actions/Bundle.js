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

export function editBundle (id, editMode) {
  return { type: 'EDIT_BUNDLE', id, editMode }
}

export function renameBundle (id, name) {
  return async (dispatch) => {
    let response = await request.put(api.bundles(id), { name })
    dispatch({ type: 'RENAME_BUNDLE', id, name })
  }
}
