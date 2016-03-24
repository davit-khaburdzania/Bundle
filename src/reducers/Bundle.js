import { fromJS } from 'immutable'

export default function (state = fromJS({ list: [] }), action) {
  switch (action.type) {
    case 'RECEIVE_BUNDLES':
      return state.set('list', fromJS(action.list))

    case 'RECEIVE_BUNDLE':
      return state.set('current', fromJS(action.bundle))

    case 'FAVORITE_BUNDLE':
      return state.update('list', (list) => list.map((bundle) => {
        if (bundle.get('id') === action.id) return bundle.set('favorited', true)
        return bundle
      }))

    case 'UNFAVORITE_BUNDLE':
      return state.update('list', (list) => list.map((bundle) => {
        if (bundle.get('id') === action.id) return bundle.set('favorited', false)
        return bundle
      }))

    case 'REMOVE_BUNDLE':
      return state.update('list', (list) => {
        return list.filter((bundle) => bundle.get('id') !== action.id)
      })

    case 'UPDATE_BUNDLE':
      return state.set('current', fromJS(action.bundle))

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
      return state.setIn(['current', 'link'], fromJS(action.link))

    case 'TOGGLE_EDIT_MODE':
      const editMode = state.getIn(['current', 'editMode'])
      return state.setIn(['current', 'editMode'], !editMode)

    default:
      return state
  }
}
