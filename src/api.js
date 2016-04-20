import { API_BASE, FETCHER_URL } from './constants'

let paths = {
  bundles: (id = '') => `${API_BASE}/bundles/${id}`,
  collections: (id = '') => `${API_BASE}/collections/${id}`,
  search: (query) => `${API_BASE}/search/resource?q=${query}`,
  favorite: (resource, id) => `${API_BASE}/${resource}/${id}/favorite`,
  favorites: () => `${API_BASE}/favorites`,
  fetchLink: (url) => FETCHER_URL + url
}

export default paths
