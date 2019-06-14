import React from 'react'
import Key from './Key'
export function Keypad({ clear, setValue }) {
  return (
    <>
      <div className="row">
        <Key id="clear" actionHandler={clear} value="AC" classes={['col-6']} />
        <Key id="divide" value="/" classes={['col-3']} />
        <Key id="multiply" value="*" classes={['col-3']} />
      </div>
      <div className="row">
        <Key id="seven" value="7" classes={['col-3']} />
        <Key id="eight" value="8" classes={['col-3']} />
        <Key id="nine" value="9" classes={['col-3']} />
        <Key id="subtract" value="-" classes={['col-3']} />
      </div>
      <div className="row">
        <Key id="four" value="4" classes={['col-3']} />
        <Key id="five" value="5" classes={['col-3']} />
        <Key id="six" value="6" classes={['col-3']} />
        <Key id="add" value="+" classes={['col-3']} />
      </div>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <Key id="one" value="1" classes={['col-4']} />
            <Key id="two" value="2" classes={['col-4']} />
            <Key id="three" value="3" classes={['col-4']} />
          </div>
          <div className="row">
            <Key id="zero" value="0" classes={['col-8']} />
            <Key id="decimal" value="." classes={['col-4']} />
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
    </>
  )
}

export default Keypad
