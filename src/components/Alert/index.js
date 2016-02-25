import React, { PropTypes } from 'react'

import Wrapper from './Wrapper'

import './index.css'

function alertContent (alerts) {
  if (alerts.length === 1) {
    return alerts
  } else {
    return <ul>{alerts.map((item, key) => <li key={key}>{item}</li>)}</ul>
  }
}

export default function Alert ({ type, alerts, removeAlert }) {
  const content = alertContent(alerts)

  return (
    <div className={`alert alert-${type}`}>
      {content}
      <button onClick={removeAlert}>x</button>
    </div>
  )
}

Alert.Wrapper = Wrapper

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  alerts: PropTypes.array.isRequired,
  removeAlert: PropTypes.func.isRequired
}
