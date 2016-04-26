import { fromJS, Map, List } from 'immutable'

let defaultState = Map({
  byId: Map()
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_COLLECTIONS':
      return state.set('byId', Map(action.list.map(col => [col.id, col])))

    case 'RECEIVE_COLLECTION':
      return state.setIn(['byId', action.collection.id], action.collection)

    case 'FAVORITE_COLLECTION':
      return state.updateIn(['byId', action.id], (col) => col.set('favorited', true))

    case 'UNFAVORITE_COLLECTION':
      return state.updateIn(['byId', action.id], (col) => col.set('favorited', false))

    case 'REMOVE_COLLECTION':
      return state.deleteIn(['byId', action.id])

    default:
      return state
  }
}
