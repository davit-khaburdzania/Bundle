import { Map, List } from 'immutable'

let defaultState = Map({
  byId: Map(),
  current: Map()
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_LINKS':
      action.list.forEach(link => {
        state = state.setIn(['byId', link.get('id')], link)
      })

      return state

    case 'SET_CURRENT_LINK':
      return state.setIn(['current', action.bundleId], action.link)

    case 'CLEAR_CURRENT_LINK':
      return state.deleteIn(['current', action.bundleId])

    case 'ADD_CURRENT_LINK_TO_BUNDLE':
      return state.setIn(['byId', action.link.get('id')], action.link)

    default:
      return state
  }
}
