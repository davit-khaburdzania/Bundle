export default function (state = { list: [], current: {} }, action) {
  switch (action.type) {
    case 'RECEIVE_BUNDLES':
      return { ...state, list: action.list }
    case 'RECEIVE_BUNDLE':
      return { ...state, current: action.bundle }
    default:
      return state
  }
}
