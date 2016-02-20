import request from 'axios'
import api from './../apiRoutes'

export function toggleSearchVisibility () {
  return { type: 'TOGGLE_SEARCH_VISIBILITY' }
}

export function getSearchResult (value) {

  return (dispatch) => {
    return request.get(api.search(value))
      .then((response) =>
        dispatch({ type: 'FETCH_SEARCH_RESULTS', result: response.data }))
      .catch(console.log)
  }
}
