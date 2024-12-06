import React, { useState } from 'react'

function Leap() {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');
  const checkNum = () => {
    if (num % 4 === 0 && num % 100 !== 0) {
      setResult('Leap Year');
    } else if (num % 400 === 0) {
      setResult('Leap Year');
    } else {
      setResult('Not a Leap Year');
    }
  }

  return (
    <div>
      <h1>Leap Year or Not</h1>
      <input type="number" name="num" value={num} onChange={(event) => setNum(event.target.value)}/>
      <button onClick={checkNum}>Check</button>
      {result && (<p>{result}</p>)}
    </div>
  )
}

export default Leap
