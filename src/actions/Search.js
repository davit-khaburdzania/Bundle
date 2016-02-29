import request from 'axios'
import api from './../api'

export function getSearchResult (value) {
  return async (dispatch) => {
    try {
      let response = await request.get(api.search(value))
      dispatch({ type: 'FETCH_SEARCH_RESULTS', result: response.data })
    } catch (error) {
      // write error handler outside
      console.log(error)
    }
  }
}
