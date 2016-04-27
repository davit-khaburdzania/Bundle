import { createSelector } from 'reselect'
import { NEW_BUNDLE_ID } from './constants'

let bundlesSelector = state => state.Bundle.get('byId')
let collectionsSelector = state => state.Collection.get('byId')
let favoritesSelector = state => state.Favorite.get('byId')
let usersSelector = state => state.User.get('byId')

let currentBundleIdSelector = state => state.Route.bundleId
let currentCollectionIdSelector = state => state.Route.collectionId
let currentUserIdSelector = state => state.User.get('me')
let currentLinksSelector = state => state.Link.get('current')

export const currentBundleSelector = createSelector(
  [currentBundleIdSelector, bundlesSelector],
  (id, bundles) => bundles.get(id)
)

export const currentCollectionSelector = createSelector(
  [currentCollectionIdSelector, collectionsSelector],
  (id, collections) => collections.get(id)
)

export const currentUserSelector = createSelector(
  [currentUserIdSelector, usersSelector],
  (id, users) => users.get(id)
)

export const currentLinkSelector = createSelector(
  [currentBundleIdSelector, currentLinksSelector],
  (bundleId, currentLinks) => currentLinks.get(bundleId)
)

export const sortedBundlesSelector = createSelector(
  bundlesSelector,
  bundles => bundles
    .valueSeq()
    .filter(bundle => bundle.id != NEW_BUNDLE_ID)
    .sortBy(bundle => bundle.created_at)
    .reverse()
    .toList()
)

export const sortedCollectionsSelector = createSelector(
  collectionsSelector,
  collections => collections
    .valueSeq()
    .sortBy(col => col.created_at)
    .reverse()
    .toList()
)

export const sortedCollectionBundlesSelector = createSelector(
  [currentCollectionSelector, bundlesSelector],
  (collection, bundles) => {
    if (!collection) return []

    return collection.bundles
      .map(id => bundles.get(id))
      .sortBy(col => col.created_at)
      .reverse()
      .toList()
  }
)

export const sortedFavoritesSelector = createSelector(
  favoritesSelector,
  favorites => favorites
    .valueSeq()
    .sortBy(item => item.get('created_at'))
    .reverse()
    .toList()
)
