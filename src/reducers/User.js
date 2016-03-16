import { fromJS } from 'immutable'

const me = {
  id: 1,
  name: 'Sarah Gadon',
  image: 'http://i.imgur.com/XMnLzi2.jpg'
}

export default function (state = fromJS({ me }), action) {
  switch (action.type) {
  default:
    return state
  }
}
