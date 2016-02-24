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
        <Alert type='success'>This is a test success</Alert>
        <Alert type='info'>This is a test info</Alert>
        <Alert type='error'>This is a test error</Alert>
        <Alert type='warning'>This is a test danger</Alert>
      </div>
    )
  }
}
