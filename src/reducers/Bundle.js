export default function (state = { list: [] }, action) {
  switch (action.type) {
    case 'RECEIVE_BUNDLES':
      return { ...state, list: action.list }
    case 'RECEIVE_BUNDLE':
      return { ...state, current: action.bundle }
    case 'FAVORITE_BUNDLE':
      let newState = { ...state }
      newState.list = newState.list.map(bundle => {
        console.log(bundle.id, action.id)
        if (bundle.id === action.id) bundle.favorited = true
        return bundle
      })
      return newState
    case 'UNFAVORITE_BUNDLE':
      let _newState = { ...state }
      _newState.list = _newState.list.map(bundle => {
        if (bundle.id == action.id) bundle.favorited = false
        return bundle
      })
      return _newState
    default:
      return state
  }
}
