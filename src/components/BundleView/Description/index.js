import React, { Component, PropTypes } from 'react'

import './index.css'

export default class BundleDescription extends Component {
  constructor (props) {
    super(props)
  }

  // handleSaveButton (event) {
  //   const { bundle, toggleEditMode } = this.props
  //
  //   const data = {
  //     name: this.refs.name.value,
  //     description: this.refs.description.value,
  //     links_attributes: bundle.links.map(link => {
  //       let newLink = {...link}
  //       delete newLink.creator
  //       return newLink
  //     })
  //   }
  //
  //   toggleEditMode(event, true, data)
  // }

  renderEditMode () {
    const { name, description } = this.props

    return (
      <div className='desc-edit-mode is-in-edit-mode'>

        <div className='bundle-name'>
          <input type='text' value={name}
            className='name bundle-view-description-name-input' />
        </div>
        <div className='bundle-desc'>
          <textarea value={description}
            className='description bundle-view-description-desc-input' />
        </div>

      </div>
    )
  }

  renderReadMode () {
    const { name, description } = this.props

    return (
      <div className='desc-read-mode'>
        <h2 className='name'>{name}</h2>
        <p className='description'>{description}</p>
      </div>
    )
  }

  renderDescription () {
    const { editMode } = this.props

    if (editMode) return this.renderEditMode()

    return this.renderReadMode()
  }

  render () {
    return (
      <div className='bundle-view-description'>
        {this.renderDescription()}
      </div>
    )
  }
}

BundleDescription.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  editMode: PropTypes.bool
}
