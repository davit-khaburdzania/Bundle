export function getBundles () {
  return (dispatch) => {
    // TODO don't use fetch
    return fetch('http://localhost:3000/bundles')
      .then((response) => response.json())
      .then((bundles) => dispatch({ type: 'RECEIVE_BUNDLES', bundles }))
  }
}
