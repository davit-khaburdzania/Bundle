import { API_BASE, FETCHER_URL } from './constants'

let paths = {
  bundles: (id = '') => `${BASE}/bundles/${id}`,
  collections: (id = '') => `${BASE}/collections/${id}`,
  search: (query) => `${BASE}/search/resource?q=${query}`,
  favorite: (resource, id) => `${BASE}/${resource}/${id}/favorite`,
  favorites: () => `${BASE}/favorites`,
  fetchLink: (url) => FETCHER_URL + url
}

export default paths
