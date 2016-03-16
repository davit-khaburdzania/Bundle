import { fromJS } from 'immutable'

export default function (state = fromJS({ list: [] }), action) {
  switch (action.type) {
  case 'RECEIVE_COLLECTIONS':
    return state.set('list', fromJS(action.list))

  case 'RECEIVE_COLLECTION':
    return state.set('current', fromJS(action.collection))

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
