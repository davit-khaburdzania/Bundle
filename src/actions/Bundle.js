import request from 'axios'

export function getBundles () {
  return (dispatch) => {
    return request.get('http://localhost:3000/bundles')
      .then((response) =>
        dispatch({ type: 'RECEIVE_BUNDLES', list: response.data }))
      .catch(console.log)
  }
}
