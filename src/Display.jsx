import React from 'react'
import PropTypes from 'prop-types'
export function Display({ input = '', result  }) {
  return (
    <>
      <div id="display" className="d-flex flex-row justify-content-end">
        {<p className="text-right">{input}</p>}
      </div>
      <div className="d-flex flex-row justify-content-end">
        <h6>{result}</h6>
      </div>
    </>
  )
}

Display.propTypes = {
  input: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired
}

export default Display
