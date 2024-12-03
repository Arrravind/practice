import React from 'react'

function Pn(props) {
  return (
    <div>
      {props.num} is  
      {props.num > 0 ? ' Positive' : 
      props.num < 0 ? ' Negative' : ' Zero'}
    </div>
  )
}

export default Pn
