import { Map, List } from 'immutable'

let defaultState = Map({ byId: Map() })

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_LINKS':
      action.list.forEach(link => {
        state = state.setIn(['byId', link.get('id')], link)
      })

      return state

    default:
      return state
  }
}
