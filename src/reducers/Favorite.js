import { Map, List } from 'immutable'

let defaultState = Map({ byId: Map() })


export default function (state = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_FAVORITES':
      action.list.forEach(favorite => {
        let id = favorite.get('id') + '-' + favorite.get('type')
        state = state.setIn(['byId', id], favorite)
      })

      return state

    case 'UNFAVORITE':
      return state.deleteIn(['byId', action.id + '-' + action.resourceType])

    default:
      return state
  }
}
