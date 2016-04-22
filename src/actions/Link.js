import request from 'axios'
import api from './../api'
import { fromJS, Map, List } from 'immutable'

export function clearCurrentLink (bundleId) {
  return { type: 'CLEAR_CURRENT_LINK' , bundleId }
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
