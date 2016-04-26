import { Record, Map } from 'immutable'

export const User = Record({
  id: undefined,
  name: undefined,
  email: undefined,
  image: undefined,
  auth_token: undefined
})

export const Bundle = Record({
  id: undefined,
  name: undefined,
  description: undefined,
  creator: undefined,
  links: undefined,
  links_count: undefined,
  favorited: undefined,
  favorites_count: undefined,
  full_response: false,
  isNewBundle: undefined,
  editMode: false,
  created_at: undefined
})

export const Collection = Record({
  id: undefined,
  name: undefined,
  bundles_count: undefined,
  favorites_count: undefined,
  shares_count: undefined,
  favorited: undefined,
  bundles: undefined,
  full_response: false,
  created_at: undefined
})

export const Link = Record({
  id: undefined,
  title: undefined,
  description: undefined,
  url: undefined,
  image: undefined,
  creator: undefined,
  created_at: undefined
})


export const Route = Record({
  bundleId: null,
  collectionId: null,
  navigationView: 'bundles'
})
