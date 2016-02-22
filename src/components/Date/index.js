import React, { PropTypes } from 'react'
import Moment from 'moment'

export default function Date ({ children, type }) {
  let time = filter(children, type)

  return <span>{time}</span>
}

function filter (date, type) {
  switch (type) {
    case 'fromNow':
      return Moment(date).fromNow()
    default:
      return date.toString()
  }
}

Date.propTypes = {
  children: PropTypes.string,
  fromNow: PropTypes.bool
}
