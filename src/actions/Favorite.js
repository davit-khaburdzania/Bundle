import request from 'axios'
import api from './../api'

export function favorite (resource, id) {
  return async (dispatch) => {
    let response = await request.post(api.favorite(resource, id))
    dispatch({
      type: resource === 'bundle' ? 'FAVORITE_BUNDLE' : 'FAVORITE_COLLECION',
      id
    })
  } 
}

export function unfavorite (resource, id) {
  return async (dispatch) => {
    let response = await request.delete(api.favorite(resource, id))
    dispatch({
      type: resource === 'bundle' ? 'UNFAVORITE_BUNDLE' : 'UNFAVORITE_COLLECION',
      id
    })
  }
}
