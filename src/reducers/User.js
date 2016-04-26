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
      action.list.forEach(user => {
        state = state.setIn(['byId', user.get('id')], user)
      })

      return state

    default:
      return state
  }
}
