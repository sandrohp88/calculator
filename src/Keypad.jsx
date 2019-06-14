import React from 'react'
import Key from './Key'
export function Keypad({ setValue }) {
  const handleClick = (event, value) => {
    setValue(value)
  }
  return (
    <>
      <div className="row">
        <Key
          handleClick={(event, value) => handleClick(event, value)}
          id="clear"
          value="AC"
          classes={['col-6']}
        />
        <Key
          handleClick={(event, value) => handleClick(event, value)}
          id="divide"
          value="/"
          classes={['col-3']}
        />
        <Key
          handleClick={(event, value) => handleClick(event, value)}
          id="multiply"
          value="*"
          classes={['col-3']}
        />
      </div>
      <div className="row">
        <Key
          handleClick={(event, value) => handleClick(event, value)}
          id="seven"
          value="7"
          classes={['col-3']}
        />
        <Key
          handleClick={(event, value) => handleClick(event, value)}
          id="eight"
          value="8"
          classes={['col-3']}
        />
        <Key
          handleClick={(event, value) => handleClick(event, value)}
          id="nine"
          value="9"
          classes={['col-3']}
        />
        <Key
          handleClick={(event, value) => handleClick(event, value)}
          id="subtract"
          value="-"
          classes={['col-3']}
        />
      </div>
      <div className="row">
        <Key
          handleClick={(event, value) => handleClick(event, value)}
          id="four"
          value="4"
          classes={['col-3']}
        />
        <Key
          handleClick={(event, value) => handleClick(event, value)}
          id="five"
          value="5"
          classes={['col-3']}
        />
        <Key
          handleClick={(event, value) => handleClick(event, value)}
          id="six"
          value="6"
          classes={['col-3']}
        />
        <Key
          handleClick={(event, value) => handleClick(event, value)}
          id="add"
          value="+"
          classes={['col-3']}
        />
      </div>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <Key
              handleClick={(event, value) => handleClick(event, value)}
              id="one"
              value="1"
              classes={['col-4']}
            />
            <Key
              handleClick={(event, value) => handleClick(event, value)}
              id="two"
              value="2"
              classes={['col-4']}
            />
            <Key
              handleClick={(event, value) => handleClick(event, value)}
              id="three"
              value="3"
              classes={['col-4']}
            />
          </div>
          <div className="row">
            <Key
              handleClick={(event, value) => handleClick(event, value)}
              id="zero"
              value="0"
              classes={['col-8']}
            />
            <Key
              handleClick={(event, value) => handleClick(event, value)}
              id="decimal"
              value="."
              classes={['col-4']}
            />
          </div>
        </div>
        <div className="col-3">
          <div className="row  h-100">
            <Key
              handleClick={(event, value) => handleClick(event, value)}
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
