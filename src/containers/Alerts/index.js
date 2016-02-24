import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from '../../components'

import './index.css'

@connect(state => ({
  alerts: state.Alerts
}))
export default class Alerts extends Component {
  render () {
    let { alerts } = this.props

    return (
      <div className='alerts-container'>
        <Alert type='success'>this is a test alert</Alert>
      </div>
    )
  }
}
