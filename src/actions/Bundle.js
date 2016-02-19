import request from 'superagent'

export function getBundles () {
  return (dispatch) => {
    // TODO don't use fetch
    return request.get('http://localhost:3000/bundles')
      .then((bundles) => dispatch({ type: 'RECEIVE_BUNDLES', bundles }))
  }
}
