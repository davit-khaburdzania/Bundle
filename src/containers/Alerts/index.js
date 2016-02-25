import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Alert } from '../../components'

import './index.css'

@connect(state => ({
  alert: state.Alerts[0]
}))
export default class Alerts extends Component {
  render () {
    let { alert } = this.props

    return (
      <div className='alerts-container'>
        <Alert type={ alert.type } alerts={ alert.list } />
      </div>
    )
  }

  static propTypes = {
    alert: PropTypes.object.isRequired
  }
}
