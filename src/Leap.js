import React from 'react'

function Leap(props) {
  return (
    <div>
      {props.year} is
      {props.year % 4 === 0 && props.year % 100 !== 0 || props.year % 400 === 0 ?
      ' a leap year' : ' Not a leap year'}
    </div>
  )
}

export default Leap