import { Map, List } from 'immutable'

let defaultState = Map({
  collections: List()
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_SEARCH_RESULTS':
      return state.set('result', action.result)

    default:
      return state
  }
}
