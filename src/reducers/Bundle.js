import { Bundle } from '../records'
import { NEW_BUNDLE_ID } from '../constants'
import { fromJS, Map, List } from 'immutable'

let defaultState = Map({
  byId: Map(),
  current: undefined
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'SAVE_BUNDLE':
      return state
        .setIn(['byId', action.bundle.id], action.bundle)

    case 'ADD_LINK_ID_TO_BUNDLE':
      return state
        .updateIn(['byId', action.bundleId, 'links'], links => links.unshift(action.linkId))

    case 'REMOVE_LINK_ID_FROM_BUNDLE':
      return state
        .updateIn(['byId', action.bundleId, 'links'], links => links.delete(action.index))

    case 'RECEIVE_BUNDLES':
      action.bundles.forEach(bundle => {
        if (state.getIn(['byId', bundle.id, 'full_response'])) return
        state = state.setIn(['byId', bundle.id], bundle)
      })

      return state

    case 'FAVORITE_BUNDLE':
      return state.updateIn(['byId', action.id], (bundle) => bundle.set('favorited', true))

    case 'UNFAVORITE_BUNDLE':
      return state.updateIn(['byId', action.id], (bundle) => bundle.set('favorited', false))

    case 'REMOVE_BUNDLE':
      return state.deleteIn(['byId', action.id])

    case 'UPDATE_BUNDLE_INFO':
      return state.setIn(['byId', action.bundleId, action.field], action.value)

    default:
      return state
  }
}
