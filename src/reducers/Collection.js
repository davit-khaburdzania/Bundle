import { fromJS, Map, List } from 'immutable'

let defaultState = Map({
  byId: Map()
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_COLLECTIONS':
      action.collections.forEach(col => {
        state = state.setIn(['byId', col.id], col)
      })

      return state

    case 'RECEIVE_COLLECTION':
      return state.setIn(['byId', action.collection.id], action.collection)

    case 'FAVORITE_COLLECTION':
      return state.updateIn(['byId', action.id], (col) => col.set('favorited', true))

    case 'UNFAVORITE_COLLECTION':
      return state.updateIn(['byId', action.id], (col) => col.set('favorited', false))

    case 'REMOVE_COLLECTION':
      return state.deleteIn(['byId', action.id])

    case 'ALL_COLLECTIONS_RECEIVED':
      return state.set('RECEIVED_ALL', true)

    default:
      return state
  }
}
