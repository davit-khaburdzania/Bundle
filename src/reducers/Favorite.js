import { Map, List } from 'immutable'

let defaultState = Map({ byId: Map() })


export default function (state = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_FAVORITES':
      action.list.forEach(favorite => {
        state = state.setIn(['byId', favorite.get('id')], favorite)
      })

      return state
    default:
      return state
  }
}
