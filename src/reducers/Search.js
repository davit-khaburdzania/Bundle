import { Map, List } from 'immutable'

let defaultState = Map({
  collections: List()
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_SEARCH_RESULTS':
      return state.set('result', action.result)
    case 'SAVE_COLLECTION_SEARCH_RESULT':
      return state.set('collections', action.collections)
    default:
      return state
  }
}
