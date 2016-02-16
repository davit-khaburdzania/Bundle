export function toggleSearchVisibility () {
  return { type: 'TOGGLE_SEARCH_VISIBILITY' }
}

export function getSearchResult (value) {
  return (dispatch) => {
    // TODO don't use fetch
    return fetch(`http://localhost:3000/search/resource?q=#{value}`)
      .then((response) => response.json())
      .then((result) => dispatch({ type: 'FETCH_SEARCH_RESULTS', result }))
  }
}
