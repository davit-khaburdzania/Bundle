export default function (state = false, action) {
  switch (action.type) {
    case 'OPEN_USER_MENU':
      return true
    case 'CLOSE_USER_MENU':
      return false
    default:
      return state
  }
}
