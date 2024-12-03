import React from 'react'

function Pn(props) {
  return (
    <div>
        {props.num} is  
      {props.num > 0 ? (<span> Positive</span>) : props.num < 0 ? (<span> negative</span>) : (<span> Zero</span>)}
    </div>
  )
}

export default Pn
