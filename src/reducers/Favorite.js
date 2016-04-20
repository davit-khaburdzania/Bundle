import { Map } from 'immutable'

export default function (state = Map(), action) {
  switch (action.type) {
    case 'RECEIVE_FAVORITES_LIST':
      return state.set('list', action.list)

    default:
      return state
  }
}
