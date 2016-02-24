export default function (state = { list: [] }, action) {
  switch (action.type) {
    case 'RECEIVE_COLLECTIONS':
      return { ...state, list: action.list }
    default:
      return state
  }
}
