import { fromJS } from 'immutable'

let defaultState = fromJS({
  bundle: { id: null },
  navigation: { view: 'bundles', collectionId: null}
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'ROUTE_CHANGE_BUNDLE_ID':
      return state
        .setIn(['bundle', 'id'], action.bundleId)
        .setIn(['bundle', 'newBundle'], false)

    case 'ROUTE_CHANGE_NEW_BUNDLE':
      return state
        .setIn(['bundle', 'newBundle'], action.newBundle)
        .setIn(['bundle', 'id'], null)

    case 'ROUTE_CHANGE_NAVIGATION_VIEW':
      return state.setIn(['navigation', 'view'], action.view)

    case 'ROUTE_CHANGE_NAVIGATION_COLLECTION_ID':
      return state.setIn(['navigation', 'collectionId'], action.collectionId)

    default:
      return state
  }
}
