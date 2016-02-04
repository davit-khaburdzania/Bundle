import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import UserMenu from './UserMenu'

const rootReducer = combineReducers({
  routing: routeReducer,
  UserMenu
})

export default rootReducer
