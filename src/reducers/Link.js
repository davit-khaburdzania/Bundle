import { Map, List } from 'immutable'

let defaultState = Map({
  byId: Map(),
  current: Map()
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_LINK':
      return state.setIn(['byId', action.link.id], action.link)

    case 'RECEIVE_LINKS':
      action.links.forEach(link => {
        state = state.setIn(['byId', link.id], link)
      })

      return state

    case 'SET_CURRENT_LINK':
      return state.setIn(['current', action.bundleId], action.link)

    case 'CLEAR_CURRENT_LINK':
      return state.deleteIn(['current', action.bundleId])

    case 'UPDATE_LINK':
      return state.setIn(['byId', action.id, action.field], action.value)

    default:
      return state
  }
}
