import { fromJS, Map, List } from 'immutable'
import { Link } from '../records'
import request from 'axios'
import api from './../api'

export function clearCurrentLink (bundleId) {
  return { type: 'CLEAR_CURRENT_LINK' , bundleId }
}

export function fetchLink (url, bundleId) {
  return async function (dispatch) {
    let response = await request({
      url: api.fetchLink(url),
      method: 'get'
    })

    let link = new Link({
      url: response.data.url,
      title: response.data.title,
      description: response.data.description,
      image: response.data.image
    })

    dispatch({ type: 'SET_CURRENT_LINK', link, bundleId})
  }
}

export function updateLink (id, field, value) {
  return { type: 'UPDATE_LINK', id, field, value }
}
