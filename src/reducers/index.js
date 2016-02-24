import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import UserMenu from './UserMenu'
import Bundle from './Bundle'
import Search from './SearchContainer'

export default combineReducers({
  UserMenu,
  Bundle,
  Search,
  routing: routerReducer
})
