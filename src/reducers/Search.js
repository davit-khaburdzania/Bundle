import { Map } from 'immutable'

export default function (state = Map(), action) {
  switch (action.type) {
    case 'FETCH_SEARCH_RESULTS':
      return state.set('result', action.result)
    default:
      return state
  }
}
