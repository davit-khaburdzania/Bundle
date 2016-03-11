import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as collectionActions from '../../../actions/Collection'
import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  collections: state.Collection.list
})

const connectProps = {
  ...collectionActions,
  ...favoriteActions
}

@connect(connectState, connectProps)
export default class CollectionsNavigationContainer extends Component {
  constructor (props) {
    props.getCollections()
    super(props)
  }

  render () {
    return <Wrapper {...this.props} />
  }
}
