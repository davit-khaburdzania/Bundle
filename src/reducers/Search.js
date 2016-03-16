import Immutable from 'immutable'

export default function (state = Immutable.Map({}), action) {
  switch (action.type) {
  case 'FETCH_SEARCH_RESULTS':
    return state.set('result', Immutable.fromJS(action.result))
  default:
    return state
  }
}
