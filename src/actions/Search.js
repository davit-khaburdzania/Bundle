import request from 'axios'
import api from './../api'

export function getSearchResult (value) {
  return async (dispatch) => {
    if (! value) return dispatch({ type: 'FETCH_SEARCH_RESULTS' })
    
    const response = await request.get(api.search(value))
    dispatch({ type: 'FETCH_SEARCH_RESULTS', result: response.data })
  }
}
