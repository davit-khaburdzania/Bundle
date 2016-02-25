export default function (state = [{
  type: 'error',
  list: [
    'The quick brown fox jumped over the lazy dog'
  ]
}], action) {
  switch (action.type) {
    default:
      return state
  }
}
