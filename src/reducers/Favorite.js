import { Map, fromJS } from 'immutable'

export default function (state = Map(), action) {
  switch (action.type) {
    case 'RECEIVE_FAVORITES_LIST':
      return state
        .set('bundles', fromJS(action.bundles))
        .set('collections', fromJS(action.collections))

    default:
      return state
  }
}
