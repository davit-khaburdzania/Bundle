const BASE = 'http://localhost:3000'

let paths = {
  bundles: (id = '') => BASE + '/bundles/' + id,
  collections: (id = '') => BASE + '/collections/' + id,
  search: (query) => BASE + '/search/resource?q=' + query
}

export default paths
