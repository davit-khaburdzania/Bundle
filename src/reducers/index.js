import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import UserMenu from './UserMenu'
import Bundle from './Bundle'
import Search from './SearchContainer'
import Alerts from './Alerts'

export default combineReducers({
  UserMenu,
  Bundle,
  Search,
  Alerts,
  routing
})
