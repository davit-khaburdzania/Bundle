import React, { Component, PropTypes } from 'react'

export default class Editable extends Component {
  handleEnter ({ key, target }) {
    let { enterAction } = this.props

    if (key === 'Enter') {
      enterAction(target.value)
    }
  }

  render () {
    let { value, editMode } = this.props

    if (editMode) {
      return <input defaultValue={value} onKeyUp={this.handleEnter.bind(this)} />
    } else {
      return <span>{value}</span>
    }
  }

  static propTypes = {
    value: PropTypes.string.isRequired,
    editMode: PropTypes.bool,
    enterAction: PropTypes.func.isRequired
  }
}
