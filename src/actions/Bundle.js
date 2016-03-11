import request from 'axios'
import api from './../api'

export function getBundles () {
  return async (dispatch) => {
    try {
      let response = await request.get(api.bundles())
      dispatch({ type: 'RECEIVE_BUNDLES', list: response.data })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}

export function getBundle (id) {
  return async (dispatch) => {
    try {
      let response = await request.get(api.bundles(id))
      dispatch({ type: 'RECEIVE_BUNDLE', bundle: response.data })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}

export function UpdateBundle (bundle_id, data) {
  const payload = {
    bundle: data
  }

  return async (dispatch) => {
    try {
      let response = await request.put(api.bundles(bundle_id), payload)
      dispatch({ type: 'UPDATE_BUNDLE', bundle: response.data })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
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
        image: response.data.image,
      }

      dispatch({ type: 'FETCH_LINK', link })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}

export function changeDescriptionInCurrentBundle (value, field) {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_DESCRIPTION',
      field,
      value
     })
  }
}

export function toggleEditMode () {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_EDIT_MODE' })
  }
}
