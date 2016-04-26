import { Route } from '../records'
import { fromJS } from 'immutable'
import { NEW_BUNDLE_ID } from '../constants'

export default function (state = new Route(), action) {
  switch (action.type) {
    case 'ROUTE_CHANGE_BUNDLE_ID':
      return state.set('bundleId', action.bundleId)

    case 'ROUTE_CHANGE_NEW_BUNDLE':
      return state.set('bundleId', NEW_BUNDLE_ID)

    case 'ROUTE_CHANGE_NAVIGATION_VIEW':
      return state.set('navigationView', action.view)

    case 'ROUTE_CHANGE_NAVIGATION_COLLECTION_ID':
      return state.set('collectionId', action.collectionId)

    case 'ROUTE_RESET_BUNDLE_ID':
      if (state.bundleId == action.id) {
        return state.set('bundleId', null)
      } else {
        return state
      }

    case 'ROUTE_RESET_COLLECTION_ID':
      if (state.collectionId == action.id) {
        return state.set('collectionId', null)
      } else {
        return state
      }

    default:
      return state
  }
}
