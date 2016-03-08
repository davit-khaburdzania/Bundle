import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as collectionActions from '../../../actions/Collection'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  collection: state.Collection
})

const connectProps = { ...collectionActions }

@connect(connectState, connectProps)
export default class Container extends Component {
  constructor (props) {
    props.getCollection(props.params.id)
    super(props)
  }

  render () {
    const { collection, children } = this.props

    if (!collection.current) return false

    return <Wrapper collection={collection.current} children={children} />
  }

  static propTypes = {
    collection: PropTypes.object.isRequired,
  }
}