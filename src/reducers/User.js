import { User } from '../records'
import { fromJS, Map } from 'immutable'

let me = new User({
  id: '1',
  name: 'Sarah Gadon',
  email: 'sarash.gadon@gmail.com',
  image: 'http://i.imgur.com/XMnLzi2.jpg'
})

let defaultState = fromJS({
  byId: { '1': me },
  me: '1'
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      action.users.forEach(user => {
        state = state.setIn(['byId', user.id], user)
      })

      return state

    case 'AUTHENTICATE_USER':
      return state.setIn(['byId', action.user.id], action.user)
                 .set('me', action.user.id)

    default:
      return state
  }
}
