import React, { Component, PropTypes } from 'react'

const ENTER_KEYCODE = 13

export default class Editable extends Component {
  handleEnter ({ which, target }) {
    let { id, rename, value } = this.props

    if (which === ENTER_KEYCODE && value !== target.value) {
      rename(id, target.value)
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
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    editMode: PropTypes.bool,
    rename: PropTypes.func.isRequired
  }
}


