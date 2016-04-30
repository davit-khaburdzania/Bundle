import { User } from '../records'

import request from 'axios'
import api from './../api'

export function setCurrentUser (user) {
  localStorage.setItem('auth_token', user.auth_token)
  request.defaults.headers.common['AUTH-TOKEN'] = user.auth_token

  return { type: 'AUTHENTICATE_USER', user: new User(user) }
}

export function authenticateUser (auth_token) {
  request.defaults.headers.common['AUTH-TOKEN'] = auth_token

  return async function (dispatch) {
    let response = await request.get(api.me())
    return dispatch(setCurrentUser(response.data))
  }
}
