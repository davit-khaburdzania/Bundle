import { User } from '../records'
import { fromJS, Map } from 'immutable'

let defaultState = fromJS({
  byId: Map(),
  current: null
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      action.users.forEach(user => {
        state = state.setIn(['byId', user.id], user)
      })

      return state

    case 'AUTHENTICATE_USER':
      return state.set('current', action.user.id)
        .setIn(['byId', action.user.id], action.user)

    default:
      return state
  }
}
