import { fromJS } from 'immutable'

export function addAlert (type, list) {
  if (typeof list === 'string') list = [list]
  return { type: 'ADD_ALERT', alert: fromJS({ type, list }) }
}

export function removeAlert () {
  return { type: 'REMOVE_ALERT' }
}
