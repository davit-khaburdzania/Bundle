export default function counter(state = false, action) {
  switch (action.type) {
  case 'TOGGLE_USER_MENU':
    return !state
  default:
    return state
  }
}
