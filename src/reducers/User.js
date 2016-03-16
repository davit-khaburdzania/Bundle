import Immutable from 'immutable'

const me = {
  id: 1,
  name: 'Sarah Gadon',
  image: 'http://i.imgur.com/XMnLzi2.jpg'
}

const defaultState = Immutable.fromJS({ me })

export default function (state = defaultState, action) {
  switch (action.type) {
  default:
    return state
  }
}
