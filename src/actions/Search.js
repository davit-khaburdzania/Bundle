import { List, fromJS } from 'immutable'
import request from 'axios'
import api from './../api'

export function getSearchResult (value) {
  return async function (dispatch) {
    if (!value) return dispatch({ type: 'FETCH_SEARCH_RESULTS' })

    let response = await request.get(api.searchResource(value))
    dispatch({ type: 'FETCH_SEARCH_RESULTS', result: fromJS(response.data) })
  }
}
