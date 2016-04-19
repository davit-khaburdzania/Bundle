const BASE = 'http://localhost:3000'
const FETCHER_URL = 'http://services.spacelab.team/fetcher?url='

let paths = {
  bundles: (id = '') => `${BASE}/bundles/${id}`,
  collections: (id = '') => `${BASE}/collections/${id}`,
  search: (query) => `${BASE}/search/resource?q=${query}`,
  favorite: (resource, id) => `${BASE}/${resource}/${id}/favorite`,
  favorites: () => `${BASE}/favorites`,
  fetchLink: (url) => FETCHER_URL + url
}

export default paths
