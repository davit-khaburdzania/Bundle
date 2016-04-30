import { combineReducers } from 'redux'
import { reducer as ui } from 'redux-ui'
import { routerReducer as routing } from 'react-router-redux'

import Bundle from './Bundle'
import Collection from './Collection'
import Search from './Search'
import Alert from './Alert'
import User from './User'
import Route from './Route'
import Favorite from './Favorite'
import Link from './Link'

const appReducer = combineReducers({
  ui,
  routing,
  Route,
  Bundle,
  Collection,
  Search,
  Alert,
  User,
  Favorite,
  Link
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
