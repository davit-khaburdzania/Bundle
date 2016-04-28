import { User } from '../records'

export function authenticate (user) {
  return { type: 'AUTHENTICATE_USER', user: new User(user) }
}
