const BASE = 'http://localhost:3000'

let paths = {
  bundles: BASE + '/bundles',
  collections: (id = '') => BASE + '/collections/' + id,
  search: (query) => BASE + '/search/resource?q=' + query
}

export default paths
