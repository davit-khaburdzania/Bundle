import { Record, Map, List } from 'immutable'

export const User = Record({
  id: null,
  name: null,
  email: null,
  image: null,
  auth_token: null
})

export const Bundle = Record({
  id: null,
  name: null,
  description: null,
  creator: null,
  collection_id: null,
  links: null,
  links_count: null,
  favorited: null,
  favorites_count: null,
  full_response: false,
  isNewBundle: null,
  editMode: false,
  created_at: null
})

export const Collection = Record({
  id: null,
  name: '',
  bundles_count: 0,
  favorites_count: 0,
  shares_count: 0,
  favorited: false,
  bundles: List(),
  full_response: false,
  created_at: null,
  editMode: false
})

export const Link = Record({
  id: null,
  title: null,
  description: null,
  url: null,
  image: null,
  creator: null,
  created_at: null
})


export const Route = Record({
  bundleId: null,
  collectionId: null,
  navigationView: 'bundles'
})
