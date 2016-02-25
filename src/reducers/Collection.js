export default function (state = { list: [] }, action) {
  switch (action.type) {
    case 'RECEIVE_COLLECTIONS':
      return { ...state, list: action.list }
    case 'RECEIVE_COLLECTION':
      return { ...state, current: action.collection }
    default:
      return state
  }
}
