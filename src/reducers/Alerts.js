export default function (state = [{
  type: 'error',
  list: [
    'The quick brown fox jumped over the lazy dog'
  ]
}], action) {
  switch (action.type) {
    case 'REMOVE_ALERT':
      return state.slice(1)
    default:
      return state
  }
}
