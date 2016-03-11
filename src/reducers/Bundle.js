export default function (state = { list: [] }, action) {
  switch (action.type) {
    case 'RECEIVE_BUNDLES':
      return { ...state, list: action.list }
    case 'RECEIVE_BUNDLE':
      return { ...state, current: action.bundle }
    case 'FAVORITE_BUNDLE':
      var newState = { ...state }
      newState.list = newState.list.map(bundle => {
        if (bundle.id === action.id) bundle.favorited = true
        return bundle
      })
      return newState
    case 'UNFAVORITE_BUNDLE':
      var newState = { ...state }
      newState.list = newState.list.map(bundle => {
        if (bundle.id == action.id) bundle.favorited = false
        return bundle
      })
      return newState
    case 'REMOVE_BUNDLE':
      var newState = { ...state }
      newState.list = newState.list.filter(bundle => bundle.id !== action.id)
      return newState
    case 'START_EDIT_BUNDLE':
      var newState = { ...state }
      newState.list = newState.list.map(bundle => {
        if (bundle.id == action.id) bundle.editMode = true
        return bundle
      })
      return newState
    case 'END_EDIT_BUNDLE':
      var newState = { ...state }
      newState.list = newState.list.map(bundle => {
        if (bundle.id == action.id) bundle.editMode = false
        return bundle
      })
      return newState
    default:
      return state
  }
}
