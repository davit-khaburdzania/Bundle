import { fromJS } from 'immutable'
import { NEW_BUNDLE_ID } from '../constants'

let defaultState = fromJS({
  bundle: { id: null },
  navigation: { view: 'bundles', collectionId: null}
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'ROUTE_CHANGE_BUNDLE_ID':
      return state.setIn(['bundle', 'id'], action.bundleId)

    case 'ROUTE_CHANGE_NEW_BUNDLE':
      return state.setIn(['bundle', 'id'], NEW_BUNDLE_ID)

    case 'ROUTE_CHANGE_NAVIGATION_VIEW':
      return state.setIn(['navigation', 'view'], action.view)

    case 'ROUTE_CHANGE_NAVIGATION_COLLECTION_ID':
      return state.setIn(['navigation', 'collectionId'], action.collectionId)

    default:
      return state
  }
}
