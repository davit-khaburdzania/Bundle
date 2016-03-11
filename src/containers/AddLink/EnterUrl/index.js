import React, { Component, PropTypes } from 'react'
import './index.css'

export default function EnterUrl({
  image,
  handeUrlEnter
}) {
  return (
    <div className='add-link-enter-url'>
      <img className='creator-image' src={image} />
      <input className='url-input' placeholder='Enter Url Here...'
        onKeyPress={handeUrlEnter} />
    </div>
  )
}

EnterUrl.propTypes = {
  image: PropTypes.string.isRequired,
  handeUrlEnter: PropTypes.func.isRequired
}
