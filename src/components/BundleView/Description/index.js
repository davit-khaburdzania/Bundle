import React, { Component, PropTypes } from 'react'


export default function BundleDescription ({
  name,
  description
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

BundleDescription.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}
