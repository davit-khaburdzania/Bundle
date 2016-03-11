export default function (state = { list: [] }, action) {
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
      return { ...state, current: {
        ...state.current,
        editMode: !state.current.editMode
      }}
    default:
      return state
  }
}
