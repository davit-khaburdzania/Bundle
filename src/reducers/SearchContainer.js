export default function (state = { open: false, result: {} }, action) {
  switch (action.type) {
    case 'TOGGLE_SEARCH_VISIBILITY':
      return { ...state, open: !state.open }
    case 'FETCH_SEARCH_RESULTS':
      let result = [...action.result.collections, ...action.result.bundles]

      return { ...state, result: result }
    default:
      return state
  }
}
