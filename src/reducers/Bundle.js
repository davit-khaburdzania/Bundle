import { fromJS, Map, List } from 'immutable'

let defaultBundle = Map({
  name: '',
  description: '',
  id: -1,
  isNewBundle: true,
  links: List()
})

let defaultState = Map({
  byId: Map(),
  current: null
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'GENERATE_NEW_BUNDLE':
      return state.set('current', defaultBundle)

    case 'SAVE_BUNDLE':
      return state.set('current', action.bundle)

    case 'UPDATE_BUNDLE_LINKS':
      return state
        .updateIn(['current', 'links'], links => links.unshift(action.link))
        .deleteIn(['current', 'link'])

    case 'RECEIVE_BUNDLES':
      return state.set('byId', Map(action.list.map(bundle => [bundle.get('id'), bundle])))

    case 'RECEIVE_BUNDLE':
      return state.set('current', action.bundle)

    case 'FAVORITE_BUNDLE':
      return state.updateIn(['byId', action.id], (bundle) => bundle.set('favorited', true))

    case 'UNFAVORITE_BUNDLE':
      return state.updateIn(['byId', action.id], (bundle) => bundle.set('favorited', false))

    case 'REMOVE_BUNDLE':
      return state.deleteIn(['byId', action.id])

    case 'UPDATE_BUNDLE':
      return state.set('current', action.bundle)

    case 'UPDATE_BUNDLE_INFO':
      return state.setIn(['current', action.field], action.value)

    case 'UPDATE_BUNDLE_LINK':
      return state.updateIn(['current', 'links'], (links) => links.map((link) => {
        if (link.get('id') === action.id) {
          return link.update(action.field, action.value)
        }

        return link
      }))

    case 'FETCH_LINK':
      return state.setIn(['current', 'link'], action.link)

    case 'TOGGLE_EDIT_MODE':
      const editMode = state.getIn(['current', 'editMode'])
      return state.setIn(['current', 'editMode'], !editMode)

    default:
      return state
  }
}
