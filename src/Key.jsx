import React from 'react'

export function Key({ id, value, actionHandler, classes = [] }) {
  return (
    <div
      className={'btn btn-outline-dark ' + classes.join(' ')}
      id={id}
      onClick={actionHandler}
    >
      <h6>{value}</h6>
    </div>
  )
}

export default Key
