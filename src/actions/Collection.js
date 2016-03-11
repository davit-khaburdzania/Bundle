import request from 'axios'
import api from './../api'

export function getCollection (id) {
  return async (dispatch) => {
    let response = await request.get(api.collections(id))
    dispatch({ type: 'RECEIVE_COLLECTION', collection: response.data })
  }
}

export function getCollections () {
  return async (dispatch) => {
    let response = await request.get(api.collections())
    dispatch({ type: 'RECEIVE_COLLECTIONS', list: response.data })
  }
}

export function removeCollection (id) {
  return async (dispatch) => {
    let response = await request.delete(api.collections(id))
    dispatch({ type: 'REMOVE_COLLECTION', id })
  }
}

export function editModeCollection (id, editMode) {
  return { type: 'EDIT_MODE_COLLECTION', id, editMode }
}

export function renameCollection (id, name) {
  return async (dispatch) => {
    let response = await request.put(api.collections(id), { name })
    dispatch({ type: 'RENAME_COLLECTION', id, name })
  }
}
