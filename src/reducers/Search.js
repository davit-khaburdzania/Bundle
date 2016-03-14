export default function (state = {}, action) {
  switch (action.type) {
  case 'FETCH_SEARCH_RESULTS':
    let result = action.result
    return { ...state, result }
  default:
    return state
  }
}
