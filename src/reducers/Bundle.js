import { fromJS, Map, List } from 'immutable'

let defaultBundle = Map({
  id: '-1',
  name: '',
  description: '',
  isNewBundle: true,
  links: List()
})

let defaultState = Map({
  byId: Map(),
  current: undefined
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'GENERATE_NEW_BUNDLE':
      return state.setIn(['byId', defaultBundle.get('id')], defaultBundle)

    case 'SAVE_BUNDLE':
      return state
        .setIn(['byId', action.bundle.get('id')], action.bundle)

    case 'ADD_CURRENT_LINK_TO_BUNDLE':
      return state
        .updateIn(['byId', action.bundleId, 'links'], links => links.unshift(action.link))
        .deleteIn(['byId', action.bundleId, 'link'])

    case 'RECEIVE_BUNDLES':
      action.list.forEach(bundle => {
        state = state.setIn(['byId', bundle.get('id')], bundle)
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

    case 'UPDATE_BUNDLE_LINK':
      return state.updateIn(['byId', action.bundleId, 'links'], (links) => links.map((link) => {
        if (link.get('id') == action.linkId) {
          return link.set(action.field, action.value)
        }

        return link
      }))

    case 'FETCH_LINK':
      return state.setIn(['byId', action.bundleId, 'link'], action.link)

    case 'TOGGLE_EDIT_MODE':
      const editMode = state.getIn(['byId', action.bundleId, 'editMode'])
      return state.setIn(['byId', action.bundleId, 'editMode'], !editMode)

    default:
      return state
  }
}
