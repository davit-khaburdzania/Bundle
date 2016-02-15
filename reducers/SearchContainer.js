export default function (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_SEARCH_VISIBILITY':
      return !state
    default:
      return state
  }
}
