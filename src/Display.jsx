import React from 'react'
import PropTypes from 'prop-types'
export function Display({ values = [], total = 0 }) {
  return (
    <>
      <div id="display" className="d-flex flex-row justify-content-end">
        {values.map((value, index) => (
          <p key={value + index} className="text-right">
            {value}
          </p>
        ))}
      </div>
      <div className="d-flex flex-row justify-content-end">
        <h6>{total}</h6>
      </div>
    </>
  )
}

Display.propTypes = {
  values: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
}

export default Display
