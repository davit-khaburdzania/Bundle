import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as CollectionActions from '../../../actions/Collection'
import Wrapper from './Wrapper'

const connect_state = (state) => ({
  collections: state.Collection.list
})

const connect_props = { ...CollectionActions }

@connect(connect_state, connect_props)
export default class CollectionsNavigationContainer extends Component {
  constructor (props) {
    props.getCollections()
    super(props)
  }

  render () {
    return <Wrapper collections={this.props.collections} />
  }
}
