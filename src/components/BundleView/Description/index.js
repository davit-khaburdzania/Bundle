import React, { Component, PropTypes } from 'react'

import './index.css'

export default class BundleDescription extends Component {
  constructor (props) {
    super(props)
  }

  handleSaveButton (event) {
    const { toggleEditMode } = this.props
    const data = {
      name: this.refs.name.value,
      description: this.refs.description.value
    }

    toggleEditMode(event, true, data)
  }

  renderEditMode () {
    const { name, description } = this.props

    return (
      <div className='is-in-edit-mode'>
        <button className='btn' onClick={this.handleSaveButton.bind(this)}>
          Save
        </button>

        <div className='bundle-name'>
          <input type='text' ref='name' defaultValue={name}
            className='name bundle-view-description-name-input' />
        </div>
        <div className='bundle-desc'>
          <textarea defaultValue={description} ref='description'
            className='description bundle-view-description-desc-input' />
        </div>

      </div>
    )
  }

  renderReadMode () {
    const { name, description, toggleEditMode } = this.props

    return (
      <div className='desc-read-mode'>
        <button className='btn'
          onClick={(event) => toggleEditMode(event, false)}>
          Edit
        </button>
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
  toggleEditMode: PropTypes.func,
  editMode: PropTypes.bool
}
