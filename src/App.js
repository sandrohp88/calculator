import React from 'react'
import Key from './Key'
import Display from './Display'
function App() {
  return (
    <div className="container-fluid w-50">
      <div className="row bg-dark text-light">
        <div className="col-12">
          <Display values={[9, '+', 0]} total={9} />
        </div>
      </div>
      <div className="row">
        <Key id="equals" value="AC" classes={['col-6']} />
        <Key id="equals" value="/" classes={['col-3']} />
        <Key id="equals" value="X" classes={['col-3']} />
      </div>
      <div className="row">
        <Key id="equals" value="7" classes={['col-3']} />
        <Key id="equals" value="8" classes={['col-3']} />
        <Key id="equals" value="9" classes={['col-3']} />
        <Key id="equals" value="-" classes={['col-3']} />
      </div>
      <div className="row">
        <Key id="equals" value="4" classes={['col-3']} />
        <Key id="equals" value="5" classes={['col-3']} />
        <Key id="equals" value="6" classes={['col-3']} />
        <Key id="equals" value="+" classes={['col-3']} />
      </div>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <Key id="equals" value="1" classes={['col-4']} />
            <Key id="equals" value="2" classes={['col-4']} />
            <Key id="equals" value="3" classes={['col-4']} />
          </div>
          <div className="row">
            <Key id="equals" value="0" classes={['col-8']} />
            <Key id="equals" value="." classes={['col-4']} />
          </div>
        </div>
        <div className="col-3">
          <div className="row  h-100">
            <Key
              id="equals"
              value="="
              classes={[
                'col-12',
                'd-flex',
                'align-items-center',
                'justify-content-center'
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
