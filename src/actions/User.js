import { User } from '../records'

import request from 'axios'
import api from './../api'

export function authenticate (user) {
  localStorage.setItem('auth_token', user.auth_token)
  request.defaults.headers.common['Authorization'] = user.auth_token

  return { type: 'AUTHENTICATE_USER', user: new User(user) }
}

export function me () {
  let auth_token = localStorage.getItem('auth_token')
  request.defaults.headers.common['Authorization'] = auth_token

  return async function (dispatch) {
    const response = await request.get(api.me())
    dispatch(authenticate(response.data))
  }
}
