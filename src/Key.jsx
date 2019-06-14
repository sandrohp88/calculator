import React from 'react'

export function Key({ id, value, handleClick, classes = [] }) {
  return (
    <div
      className={'btn btn-outline-dark ' + classes.join(' ')}
      id={id}
      onClick={event => handleClick(event, value)}
    >
      <h6>{value}</h6>
    </div>
  )
}

export default Key
