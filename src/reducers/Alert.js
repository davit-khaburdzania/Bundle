import { Stack } from 'immutable'

export default function (state = Stack(), action) {
  switch (action.type) {
    case 'ADD_ALERT':
      return state.push(action.alert)

    case 'REMOVE_ALERT':
      return state.pop()

    default:
      return state
  }
}
