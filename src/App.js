import React, { useState, useEffect } from 'react'
import Keypad from './Keypad'
import Display from './Display'
import { isNumber } from './utils'

function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('0')
  const handleInput = event => {
    const key = event.key
    const regOperation = /\+|-|\*|\//
    // expression
    if (isNumber(key) || regOperation.test(key)) {
      setExpression(expression.concat(key))
    }
    // result
    if (isNumber(key)) {
      result === '0'
        ? setResult(key)
        : setResult(result.concat(key))
    }
    if (regOperation.test(key)) {
      setResult(key)
    }
    console.log(expression)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleInput)
    return () => window.removeEventListener('keydown', handleInput)
  })
  return (
    <div className="container-fluid w-50">
      <div className="row bg-dark text-light">
        <div className="col-12">
          <Display input={expression} result={result} />
        </div>
      </div>
      <Keypad />
    </div>
  )
}

export default App
