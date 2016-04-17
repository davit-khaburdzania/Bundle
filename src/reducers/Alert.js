import { List } from 'immutable'

export default function (state = List(), action) {
  switch (action.type) {
    case 'ADD_ALERT':
      return state.concat(action.alert)
    case 'REMOVE_ALERT':
      return state.slice(1)
    default:
      return state
  }
}
