import React, { useState, useEffect } from 'react'
import Keypad from './Keypad'
import Display from './Display'
import {
  isNumber,
  isArithmeticOperator,
  evalExpression,
  multipleContinuousOperators,
  regMultContiguousOperators,
  replacer
} from './utils'

function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('0')
  const handleInput = (event, value) => {
    const key = value !== undefined ? value : event.key
    // expression
    if (isNumber(key) || isArithmeticOperator(key)) {
      setExpression(expression.concat(key))
      if (expression.includes('=')) {
        setExpression(result + key)
      }
    }
    // result
    if (isNumber(key)) {
      result === '0' ? setResult(key) : setResult(result.concat(key))
    }
    if (isArithmeticOperator(key)) {
      setResult(key)
    }
    if (key === 'Enter' || key === '=') {
      let parsedExpression
      multipleContinuousOperators(expression)
        ? (parsedExpression = expression.replace(
            regMultContiguousOperators,
            replacer
          ))
        : (parsedExpression = expression)
      const total = evalExpression(parsedExpression)

      setResult(total.toString())
      setExpression(expression.concat('=' + total))
    }
    if (key === 'Delete' || key === 'AC') {
      handleClear()
    }
    if (key === '.' && !result.includes('.')) {
      setExpression(expression + key)
      setResult(result + key)
    }
  }
  const handleClear = () => {
    setExpression('')
    setResult('0')
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
      <Keypad setValue={value => handleInput(undefined, value)} />
    </div>
  )
}

export default App
