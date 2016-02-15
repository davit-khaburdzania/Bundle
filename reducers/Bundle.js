export default function (state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_BUNDLES':
      // TODO should have bundles
      return { ...state }
    default:
      return state
  }
}
