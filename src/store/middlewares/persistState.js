import { persistState } from 'redux-devtools'

export default function devToolsPersistState () {
  return persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
}
