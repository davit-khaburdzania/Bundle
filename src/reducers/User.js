import { Map } from 'immutable'

let defaultState = Map({
  byId: Map(),
  me: Map({
    id: 1,
    name: 'Sarah Gadon',
    image: 'http://i.imgur.com/XMnLzi2.jpg'
  })
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
