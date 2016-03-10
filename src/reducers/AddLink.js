export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_LINK':
      return {
        ...state,
        [action.bundleId]: {
          ...state[action.bundleId],
          link: action.link
        }
      }
    default:
      return state
  }
}
