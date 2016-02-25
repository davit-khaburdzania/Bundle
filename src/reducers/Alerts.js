export default function (state = [], action) {
  switch (action.type) {
    case 'REMOVE_ALERT':
      return state.slice(1)
    default:
      return state
  }
}
