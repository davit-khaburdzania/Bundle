import React, { PropTypes } from 'react'

import './index.css'

function alertContent (alerts) {
  if (alerts.length == 1) {
    return alerts
  } else {
    return <ul>{ alerts.map((item, key) => <li key={ key }>{item}</li>) }</ul>
  }
}

export default function Alert ({ type, alerts }) {
  const content = alertContent(alerts)

  return (
    <div className={ `alert alert-${type}` }>{content}</div>
  )
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  alerts: PropTypes.array.isRequired
}
