import Immutable from 'immutable'

const defaultState = Immutable.fromJS({ list: [] })

export default function (state = defaultState, action) {
  switch (action.type) {
  case 'RECEIVE_COLLECTIONS':
    return state.set('list', Immutable.fromJS(action.list))

  case 'RECEIVE_COLLECTION':
    return state.set('current', Immutable.fromJS(action.collection))

  case 'FAVORITE_COLLECTION':
    return state.update('list', list => list.map(col => {
      if (col.get('id') === action.id) return col.set('favorited', true)
      return col
    }))

  case 'UNFAVORITE_COLLECTION':
    return state.update('list', list => list.map(col => {
      if (col.get('id') === action.id) return col.set('favorited', false)
      return col
    }))

  case 'REMOVE_COLLECTION':
    return state.update('list', list => {
      return list.filter(col => col.get('id') !== action.id)
    })

  default:
    return state
  }
}
