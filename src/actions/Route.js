export function routeChangeBundleId (bundleId) {
  return { type: 'ROUTE_CHANGE_BUNDLE_ID', bundleId }
}

export function routeChangeNewBundle (newBundle) {
  return { type: 'ROUTE_CHANGE_NEW_BUNDLE', newBundle }
}


export function routeChangeNavigationView (view) {
  return { type: 'ROUTE_CHANGE_NAVIGATION_VIEW', view }
}

export function routeChangeNavigationCollectionId (collectionId) {
  return { type: 'ROUTE_CHANGE_NAVIGATION_COLLECTION_ID', collectionId }
}
