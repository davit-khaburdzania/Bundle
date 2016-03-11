export default function (state = { list: [], editMode: false }, action) {
  switch (action.type) {
    case 'RECEIVE_BUNDLES':
      return { ...state, list: action.list }
    case 'RECEIVE_BUNDLE':
      return { ...state, current: action.bundle }
    case 'UPDATE_BUNDLE':
      return { ...state, current: action.bundle }
    case 'FETCH_LINK':
      return { ...state, current: {
        ...state.current,
        link: action.link
      }}
    case 'UPDATE_DESCRIPTION':
      return {
        ...state,
        current: { ...state.current, [action.field]: action.value }
      }
    case 'TOGGLE_EDIT_MODE':
      return {
        ...state,
        editMode: !state.editMode
      }
    default:
      return state
  }
}
