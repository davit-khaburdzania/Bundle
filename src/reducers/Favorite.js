import { Map, List } from 'immutable'

let defaultState = Map({ list: List() })


export default function (state = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_FAVORITES':
      return state.set('list', action.list)

    default:
      return state
  }
}
