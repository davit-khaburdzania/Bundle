import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import UserMenu from './UserMenu'
import Bundle from './Bundle'
import Search from './SearchContainer'

const rootReducer = combineReducers({
  routing: routeReducer,
  UserMenu,
  Bundle,
  Search
})

export default rootReducer
