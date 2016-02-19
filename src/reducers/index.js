import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import UserMenu from './UserMenu'
import Bundle from './Bundle'

const rootReducer = combineReducers({
  routing: routeReducer,
  UserMenu,
  Bundle
})

export default rootReducer
