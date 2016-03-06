import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import UserMenu from './UserMenu'
import Bundle from './Bundle'
import Collection from './Collection'
import Search from './Search'
import Alert from './Alert'

export default combineReducers({
  UserMenu,
  Bundle,
  Collection,
  Search,
  Alert,
  routing
})
