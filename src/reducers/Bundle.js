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

  case 'UPDATE_BUNDLE':
    return { ...state, current: action.bundle }

  case 'UPDATE_BUNDLE_INFO':
    return {
      ...state,
      current: { ...state.current, [action.field]: action.value }
    }

  case 'UPDATE_BUNDLE_LINK':
    return { ...state,
      current: {
        ...state.current,
        links: state.current.links.map(link => {
          const newLink = { ...link }

          if (newLink.id === action.id) newLink[action.field] = action.value

          return newLink
        })
      }
    }

  case 'FETCH_LINK':
    return { ...state, current: {
      ...state.current,
      link: action.link
    }}

  case 'TOGGLE_EDIT_MODE':
    return { ...state, current: {
      ...state.current,
      editMode: !state.current.editMode
    }}

  default:
    return state
  }
}
