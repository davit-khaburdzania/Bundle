import React, { Component, PropTypes } from 'react'

import './index.css'

export default class BundleDescription extends Component {
  constructor (props) {
    super(props)
  }

  handleChange (e) {
    const { handleDesctiptionChange } = this.props
    let field = e.target.dataset.name
    let value = e.target.value

    handleDesctiptionChange(value, field)
  }

  renderEditMode () {
    const { name, description } = this.props

    return (
      <div className='is-in-edit-mode'>
        <div className='bundle-name'>
          <input type='text' data-name='name' value={name}
            onChange={this.handleChange.bind(this)}
            className='name bundle-view-description-name-input' />
        </div>
        <div className='bundle-desc'>
          <textarea value={description} data-name='description'
            onChange={this.handleChange.bind(this)} cols='80' rows='10'
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
    const { handleDesctiptionChange, toggleEditMode } = this.props

    return (
      <div className='bundle-view-description'>
        <button onClick={toggleEditMode}> toggle edit mode </button>
        {this.renderDescription()}
      </div>
    )
  }
}

BundleDescription.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}
