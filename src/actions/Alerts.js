export function addAlert (type, list) {
  if (typeof list === 'string') list = [list]
  return { type: 'ADD_ALERT', alert: { type, list } }
}

export function removeAlert () {
  return { type: 'REMOVE_ALERT' }
}
