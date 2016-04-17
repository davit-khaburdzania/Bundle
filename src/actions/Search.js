import { fromJS } from 'immutable'
import request from 'axios'
import api from './../api'

export function getSearchResult (value) {
  return async function (dispatch) {
    if (!value) return dispatch({ type: 'FETCH_SEARCH_RESULTS' })

    const response = await request.get(api.search(value))
    dispatch({ type: 'FETCH_SEARCH_RESULTS', result: fromJS(response.data) })
  }
}
