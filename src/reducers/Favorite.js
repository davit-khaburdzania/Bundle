import { Map, fromJS } from 'immutable'

export default function (state = Map(), action) {
  switch (action.type) {
    case 'RECEIVE_FAVORITES_LIST':
      return state.set('list', fromJS(action.list))

    default:
      return state
  }
}
