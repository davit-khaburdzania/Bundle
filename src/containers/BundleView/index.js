import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import * as collectionActions from '../../../actions/Collection'
// import Wrapper from './Wrapper'

// const connectState = (state) => ({
//   collection: state.Collection
// })
//
// const connectProps = { ...collectionActions }
//
// @connect(connectState, connectProps)
export default class Container extends Component {
  constructor (props) {
    console.log('BundleView')
    super(props)
  }

  render () {
    console.log('viri')
    return <div> wait a minut </div>
  }
}
