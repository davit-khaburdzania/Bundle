import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import UserMenu from './UserMenu'
import Bundle from './Bundle'
import Collection from './Collection'
import Search from './Search'
import Alert from './Alert'
import User from './User'
import Route from './Route'

export default combineReducers({
  routing,
  Route,
  UserMenu,
  Bundle,
  Collection,
  Search,
  Alert,
  User
})
