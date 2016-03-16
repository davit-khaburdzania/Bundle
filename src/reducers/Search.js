import { Map, fromJS } from 'immutable'

export default function (state = Map(), action) {
  switch (action.type) {
  case 'FETCH_SEARCH_RESULTS':
    return state.set('result', fromJS(action.result))
  default:
    return state
  }
}
