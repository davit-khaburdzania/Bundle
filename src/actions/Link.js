import request from 'axios'
import api from './../api'

export function clearCurrentLink (bundleId) {
  return { type: 'CLEAR_CURRENT_LINK' , bundleId }
}
