import { persistState } from 'redux-devtools'

export function devToolsPersistState () {
  return persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
}

