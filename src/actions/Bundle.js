import request from 'axios'
import api from './../apiRoutes'

export function getBundles () {
  return (dispatch) => {
    return request.get(api.bundles)
      .then((response) =>
        dispatch({ type: 'RECEIVE_BUNDLES', list: response.data }))
      .catch(console.log)
  }
}
