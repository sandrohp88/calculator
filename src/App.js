import React from 'react'
import Keypad from './Keypad'
import Display from './Display'
function App() {
  return (
    <div className="container-fluid w-50">
      <div className="row bg-dark text-light">
        <div className="col-12">
          <Display values={[9, '+', 0]} total={9} />
        </div>
      </div>
      <Keypad />
    </div>
  )
}

export default App
