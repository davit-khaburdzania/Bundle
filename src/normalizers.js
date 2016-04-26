import { Schema, arrayOf } from 'normalizr'

export const collectionSchema = new Schema('collections', { idAttribute: 'id' })
export const bundleSchema = new Schema('bundles', { idAttribute: 'id' })
export const userSchema = new Schema('users', { idAttribute: 'id' })
export const linkSchema = new Schema('links', { idAttribute: 'id' })


collectionSchema.define({
  bundles: arrayOf(bundleSchema)
})

bundleSchema.define({
  creator: userSchema,
  links: arrayOf(linkSchema)
})

linkSchema.define({
  creator: userSchema
})
